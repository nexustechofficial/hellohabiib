import { afterEach, describe, expect, it, vi } from 'vitest';
import { inquirySchema } from '../src/lib/validation';
import { contactSettings, deliverInquiry, reserveRateLimit, type ContactSettings } from '../src/lib/contact';

const valid = { name: 'Test Person', email: 'test@example.com', company: '', projectType: 'Website', budget: '', details: 'A test inquiry about building an accessible website.', consent: true, website: '' };
const settings: ContactSettings = { apiKey: 'test-only-not-a-key', from: 'site@example.com', to: 'owner@example.com', redisUrl: 'https://example.com', redisToken: 'test-only' };
afterEach(() => vi.unstubAllEnvs());
describe('inquiry validation', () => {
  it('accepts a complete inquiry and normalizes surrounding whitespace', () => {
    expect(inquirySchema.parse({ ...valid, name: '  Test Person  ' }).name).toBe('Test Person');
  });
  it.each([{ email: 'not-an-email' }, { name: 'Name\r\nInjected: header' }, { details: 'Too short' }, { details: 'x'.repeat(5001) }, { consent: false }, { projectType: '' }])('rejects invalid or unsafe input: %j', patch => {
    expect(inquirySchema.safeParse({ ...valid, ...patch }).success).toBe(false);
  });
  it('does not enable delivery without all required configuration', () => {
    for (const key of ['RESEND_API_KEY', 'CONTACT_EMAIL_FROM', 'CONTACT_EMAIL_TO', 'UPSTASH_REDIS_REST_URL', 'UPSTASH_REDIS_REST_TOKEN']) vi.stubEnv(key, '');
    expect(contactSettings()).toBeNull();
  });
});
describe('delivery contract (mock provider, no real email sent)', () => {
  it('uses the approved inbox by default once sender and rate-limit settings exist', async () => {
    for (const [key, value] of Object.entries({ RESEND_API_KEY: 'test-only', CONTACT_EMAIL_FROM: 'website@example.com', CONTACT_EMAIL_TO: '', UPSTASH_REDIS_REST_URL: 'https://example.com', UPSTASH_REDIS_REST_TOKEN: 'test-only' })) vi.stubEnv(key, value);
    const configured = contactSettings();
    expect(configured?.to).toBe('habiibullah448@gmail.com');
    const mock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: 'accepted-test' })));
    await deliverInquiry(valid, configured!, mock);
    expect(JSON.parse(mock.mock.calls[0][1].body).to).toEqual(['habiibullah448@gmail.com']);
    vi.stubEnv('RESEND_API_KEY', '');
    expect(contactSettings()).toBeNull();
  });
  it('requires provider acceptance and uses plain-text content and a fixed subject', async () => {
    const mock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: 'accepted-test' }), { status: 200 }));
    expect(await deliverInquiry({ ...valid, details: '<script>test</script> is plain text in this inquiry.' }, settings, mock)).toBe('accepted-test');
    const payload = JSON.parse(mock.mock.calls[0][1].body);
    expect(payload.reply_to).toBe(valid.email);
    expect(payload.subject).toBe('New website project inquiry');
    expect(payload.html).toBeUndefined();
  });
  it('does not claim success for a rejected email', async () => {
    await expect(deliverInquiry(valid, settings, vi.fn().mockResolvedValue(new Response('{}', { status: 401 })))).rejects.toThrow();
  });
  it('does not claim success without a provider message ID', async () => {
    await expect(deliverInquiry(valid, settings, vi.fn().mockResolvedValue(new Response('{}', { status: 200 })))).rejects.toThrow();
  });
  it('blocks the sixth attempt and fails closed if the limiter is unavailable', async () => {
    expect(await reserveRateLimit('hash', settings, vi.fn().mockResolvedValue(new Response('{"result":6}')))).toBe(false);
    expect(await reserveRateLimit('hash', settings, vi.fn().mockResolvedValue(new Response('{"result":1}')))).toBe(true);
    await expect(reserveRateLimit('hash', settings, vi.fn().mockResolvedValue(new Response('{}', { status: 500 })))).rejects.toThrow();
  });
});
