import { z } from 'zod';
import { inquirySchema } from './validation';
export type ContactSettings={apiKey:string;from:string;to:string;redisUrl:string;redisToken:string};
export function contactSettings():ContactSettings|null{
 const {RESEND_API_KEY,CONTACT_EMAIL_FROM,CONTACT_EMAIL_TO,UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN}=process.env;
 if(!RESEND_API_KEY||!CONTACT_EMAIL_FROM||!CONTACT_EMAIL_TO||!UPSTASH_REDIS_REST_URL||!UPSTASH_REDIS_REST_TOKEN)return null;
 if(!z.email().safeParse(CONTACT_EMAIL_FROM).success||!z.email().safeParse(CONTACT_EMAIL_TO).success)return null;
 try{if(new URL(UPSTASH_REDIS_REST_URL).protocol!=='https:')return null;}catch{return null;}
 return {apiKey:RESEND_API_KEY,from:CONTACT_EMAIL_FROM,to:CONTACT_EMAIL_TO,redisUrl:UPSTASH_REDIS_REST_URL,redisToken:UPSTASH_REDIS_REST_TOKEN};
}
export async function deliverInquiry(input:unknown,settings:ContactSettings,fetcher:typeof fetch=fetch){
 const inquiry=inquirySchema.parse(input);
 const response=await fetcher('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${settings.apiKey}`,'Content-Type':'application/json'},body:JSON.stringify({from:settings.from,to:[settings.to],reply_to:inquiry.email,subject:'New website project inquiry',text:[`Name: ${inquiry.name}`,`Email: ${inquiry.email}`,`Company: ${inquiry.company||'Not supplied'}`,`Project: ${inquiry.projectType}`,`Budget: ${inquiry.budget||'Not supplied'}`,'',inquiry.details].join('\n')}),signal:AbortSignal.timeout(12000)});
 if(!response.ok)throw new Error('Delivery provider rejected inquiry');
 const result=await response.json();
 if(typeof result.id!=='string'||!result.id)throw new Error('Delivery provider did not confirm acceptance');
 return result.id as string;
}
export async function reserveRateLimit(key:string,settings:ContactSettings,fetcher:typeof fetch=fetch){
 const response=await fetcher(settings.redisUrl,{method:'POST',headers:{Authorization:`Bearer ${settings.redisToken}`,'Content-Type':'application/json'},body:JSON.stringify(['EVAL',"local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],600) end; return n",'1',`inquiry:${key}`]),signal:AbortSignal.timeout(5000)});
 if(!response.ok)throw new Error('Rate limiter unavailable');
 const body=await response.json();
 if(typeof body.result!=='number')throw new Error('Rate limiter returned invalid data');
 return body.result<=5;
}
