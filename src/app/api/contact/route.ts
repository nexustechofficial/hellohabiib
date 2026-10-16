import { createHash } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { inquirySchema } from '@/lib/validation';
import { contactSettings, deliverInquiry, reserveRateLimit } from '@/lib/contact';
import { siteIdentity } from '@/data/site';
export const runtime='nodejs';
const answer=(body:object,status:number)=>NextResponse.json(body,{status,headers:{'Cache-Control':'no-store'}});
export async function POST(request:NextRequest){
 const origin=request.headers.get('origin');
 const allowed=process.env.NODE_ENV==='development'?request.nextUrl.origin:siteIdentity.canonicalOrigin;
 if(origin!==allowed)return answer({error:'This request could not be verified. Reload the contact page and try again.'},403);
 if(!request.headers.get('content-type')?.includes('application/json'))return answer({error:'Send a JSON inquiry.'},415);
 if(Number(request.headers.get('content-length')||0)>16000)return answer({error:'This inquiry is too large.'},413);
 let input:unknown;
 try{
  const reader=request.body?.getReader();if(!reader)return answer({error:'Missing inquiry.'},400);
  const chunks:Uint8Array[]=[];let bytes=0;
  while(true){const {value,done}=await reader.read();if(done)break;bytes+=value.byteLength;if(bytes>16000){await reader.cancel();return answer({error:'This inquiry is too large.'},413);}chunks.push(value);}
  input=JSON.parse(Buffer.concat(chunks).toString('utf8'));
 }catch{return answer({error:'Could not read this inquiry.'},400);}
 const parsed=inquirySchema.safeParse(input);
 if(!parsed.success)return answer({error:'Please check your inquiry.',fields:parsed.error.flatten().fieldErrors},400);
 if(parsed.data.website)return answer({error:'This inquiry could not be accepted.'},422);
 const settings=contactSettings();
 if(!settings)return answer({error:'Online delivery is not configured yet. Your inquiry has not been sent.'},503);
 try{
  // On Vercel this header is platform-supplied; elsewhere the documented trusted proxy must set it.
  const address=request.headers.get('x-vercel-forwarded-for')?.split(',')[0].trim()||request.headers.get('x-real-ip')||'shared';
  const key=createHash('sha256').update(address).digest('hex').slice(0,32);
  if(!await reserveRateLimit(key,settings))return answer({error:'Too many inquiries. Please try again in ten minutes.'},429);
  await deliverInquiry(parsed.data,settings);
  return answer({message:'Your inquiry was accepted for delivery. Thank you for reaching out.'},200);
 }catch{return answer({error:'Delivery is temporarily unavailable. Your inquiry was not confirmed; please try again later.'},502);}
}
