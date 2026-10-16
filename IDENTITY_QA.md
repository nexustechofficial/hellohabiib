# Identity and launch QA

- [ ] Visible H1 on home contains Habibullah; header, footer, About and author identity agree.
- [ ] Canonicals, metadataBase, Person IDs, sitemap and robots use https://hellohabiib.com.
- [ ] Search source files for `Habiib`, `Habib`, `example.com`, old project names, invented social links and other domains. Review every result; approved alias/domain, test fixtures, documentation and supplied brief are distinct from public claims.
- [ ] Confirm exact spelling and URLs for any alias or sameAs entries. Do not infer profiles from a handle.
- [ ] Portrait is owner supplied, licensed and described honestly. Abstract monogram is not a portrait.
- [ ] Approve role, date, technology, screenshots, live URL and outcomes for every case study.
- [ ] Approve services, process and scope before setting approved + published.
- [ ] Articles have genuine content, author and publication date; drafts remain absent from sitemap and detail pages.
- [ ] Public contact address, mailbox retention policy and privacy contact approved.
- [ ] Verify Resend sender domain and actual receipt using owner-approved configuration.
- [ ] Launch canonical domain over HTTPS; redirect www/alternate hosts at hosting layer.
- [ ] Keep SITE_INDEXABLE=false in staging. Enable only on approved production; inspect robots and sitemap afterward.
- [ ] Verify Search Console and Bing ownership, submit sitemap, inspect home/About/project URLs and monitor branded queries. No ranking or AI-citation guarantees.

Useful source scan (exclude generated outputs and dependencies):

```sh
rg -n 'Hello Habib|hello@example|Forma|Studio North|Pulse|https?://' src public .env.example README.md
```
