import { describe, expect, it } from 'vitest';
import { siteIdentity } from '../src/data/site';
import { personSchema, JsonLd } from '../src/lib/seo';
import { projects, services, articles, publishedItems } from '../src/data/content';
describe('identity and publishing safety', () => {
  it('keeps a consistent canonical person without invented aliases or profiles', () => {
    const schema = personSchema();
    expect(schema.name).toBe('Habibullah');
    expect(schema.url).toBe('https://hellohabiib.com');
    expect(schema).not.toHaveProperty('sameAs');
    expect(schema.image).toBe('https://hellohabiib.com/images/habibullah-portrait.webp');
    expect(siteIdentity.publicAliases).toEqual([]);
  });
  it('keeps unapproved collections unpublished', () => {
    const candidate = projects[0];
    expect(publishedItems([{ ...candidate, approved: false }, { ...candidate, published: false }])).toEqual([]);
    expect(projects).toHaveLength(3);
    expect([...services, ...articles]).toEqual([]);
  });
  it('prevents script breakout in structured data', () => {
    expect(JsonLd({ data: { name: '</script><script>alert(1)</script>' } })).not.toContain('<');
  });
});
