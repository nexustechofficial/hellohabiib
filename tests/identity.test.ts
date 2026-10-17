import { describe, expect, it } from 'vitest';
import { siteIdentity } from '../src/data/site';
import { personSchema, organizationSchema, JsonLd } from '../src/lib/seo';
import { projects, services, articles, publishedItems } from '../src/data/content';
describe('identity and publishing safety', () => {
  it('keeps a consistent canonical person without invented aliases or profiles', () => {
    const schema = personSchema();
    expect(schema.name).toBe('Habibullah');
    expect(schema.url).toBe('https://hellohabiib.com');
    expect(schema).not.toHaveProperty('sameAs');
    expect(schema.image).toBe('https://hellohabiib.com/images/habibullah-portrait.webp');
    expect(siteIdentity.publicAliases).toEqual(['Habib Ullah']);
    expect(schema.alternateName).toEqual(['Habib Ullah']);
    expect(schema.jobTitle).toBe('Founder & CEO');
    const organization = organizationSchema();
    expect(organization.name).toBe('Nexus Tech PK');
    expect(schema.worksFor['@id']).toBe(organization['@id']);
    expect(organization.founder['@id']).toBe(schema['@id']);
  });
  it('keeps unapproved collections unpublished', () => {
    const candidate = projects[0];
    expect(publishedItems([{ ...candidate, approved: false }, { ...candidate, published: false }])).toEqual([]);
    expect(projects).toHaveLength(3);
    expect(services.map(item => item.slug)).toEqual(['brand-startup-launch']);
    expect(publishedItems(services.map(item => ({ ...item, approved: false })))).toEqual([]);
    expect(articles).toEqual([]);
  });
  it('prevents script breakout in structured data', () => {
    expect(JsonLd({ data: { name: '</script><script>alert(1)</script>' } })).not.toContain('<');
  });
});
