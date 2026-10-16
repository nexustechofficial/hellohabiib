import { z } from 'zod';
const singleLine = (max:number) => z.string().trim().max(max).refine(value=>!/[\r\n\u0000]/.test(value),'Use a single line of text.');
export const inquirySchema=z.object({
 name:singleLine(100).pipe(z.string().min(2,'Please enter your full name.')),
 email:singleLine(254).pipe(z.email('Enter a valid email address.')),
 company:singleLine(120).optional().default(''),
 projectType:singleLine(120).pipe(z.string().min(2,'Choose a project type.')),
 budget:singleLine(80).optional().default(''),
 details:z.string().trim().min(30,'Tell me a little more (at least 30 characters).').max(5000,'Please keep details under 5,000 characters.').refine(v=>!v.includes('\u0000'),'Invalid character.'),
 consent:z.literal(true,{error:'Please acknowledge the privacy notice.'}),
 website:z.string().max(200).optional().default(''),
});
export type InquiryInput=z.input<typeof inquirySchema>;
