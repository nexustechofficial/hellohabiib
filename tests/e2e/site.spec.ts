import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const valid={name:'Test Person',email:'test@example.com',company:'',projectType:'Website',budget:'',details:'A test inquiry about building a thoughtful responsive website.',consent:true,website:''};

test('identity, styling, schema and all informational routes render',async({page})=>{
 const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
 for(const path of ['/','/about','/projects','/services','/journal','/contact','/privacy']){
  const response=await page.goto(path);expect(response?.status()).toBe(200);
  await expect(page.locator('main h1')).toHaveCount(1);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content',/noindex/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href',`https://hellohabiib.com${path==='/'?'':path}`);
 }
 await page.goto('/');
 await expect(page.locator('h1')).toContainText('Habibullah');
 expect(await page.locator('body').evaluate(el=>getComputedStyle(el).backgroundColor)).toBe('rgb(8, 8, 8)');
 const schema=JSON.parse(await page.locator('script[type="application/ld+json"]').innerText());
 expect(schema['@graph'][0].name).toBe('Habibullah');expect(schema['@graph'][0].sameAs).toBeUndefined();
 expect(errors).toEqual([]);
});

test('responsive layout, reduced motion and mobile keyboard menu',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});
 for(const [width,height] of [[360,800],[390,844],[768,1024],[1024,640],[1440,900],[1920,1080]]){
  await page.setViewportSize({width,height});await page.goto('/');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await expect(page.locator('.monogram-fallback')).toBeVisible();
  expect(await page.locator('.sculpture canvas').count()).toBe(0);
 }
 await page.setViewportSize({width:390,height:844});await page.goto('/');
 await page.getByRole('button',{name:'Open navigation'}).click();
 await expect(page.getByRole('button',{name:'Close navigation'})).toHaveAttribute('aria-expanded','true');
 await page.keyboard.press('Escape');await expect(page.getByRole('button',{name:'Open navigation'})).toBeFocused();
 await page.getByRole('button',{name:'Open navigation'}).click();await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'About'}).click();
 await expect(page).toHaveURL(/\/about$/);await expect(page.getByRole('button',{name:'Open navigation'})).toHaveAttribute('aria-expanded','false');
});

test('unapproved content is absent and draft detail URLs really return 404',async({page,request})=>{
 for(const path of ['/projects/nexus-tech-pk','/services/website-development','/journal/first-post','/not-a-real-page']){
  const response=await page.goto(path);expect(response?.status()).toBe(404);await expect(page.locator('h1')).toContainText('shape');
 }
 await page.goto('/');await expect(page.locator('main')).toContainText('Subecta');await expect(page.locator('main')).toContainText('Elite Jobs Hub');
 const robots=await request.get('/robots.txt');expect(await robots.text()).toContain('Disallow: /');
 const sitemap=await request.get('/sitemap.xml');expect(await sitemap.text()).not.toContain('<loc>');
 const image=await request.get('/opengraph-image?title=About%20Habibullah');expect(image.status()).toBe(200);expect(image.headers()['content-type']).toContain('image/png');
});

test('contact validates accessibly and never claims an unconfigured inquiry was sent',async({page,request})=>{
 await page.goto('/contact');await expect(page.getByRole('note')).toContainText('not configured');
 await page.getByRole('button',{name:'Check Inquiry'}).click();await expect(page.locator('#name')).toHaveAttribute('aria-invalid','true');await expect(page.getByRole('status')).toContainText('highlighted');
 const headers={Origin:'https://hellohabiib.com'};
 expect((await request.post('/api/contact',{headers,data:{}})).status()).toBe(400);
 const unavailable=await request.post('/api/contact',{headers,data:valid});expect(unavailable.status()).toBe(503);expect((await unavailable.json()).error).toContain('not been sent');
 expect((await request.post('/api/contact',{headers:{Origin:'https://untrusted.example'},data:valid})).status()).toBe(403);
 expect((await request.post('/api/contact',{headers,data:{...valid,website:'spam'}})).status()).toBe(422);
 expect((await request.post('/api/contact',{headers,data:{...valid,details:'x'.repeat(17000)}})).status()).toBe(413);
});

test('core identity, navigation and static H survive without JavaScript',async({browser})=>{
 const context=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const page=await context.newPage();await page.goto('/');await expect(page.locator('h1')).toContainText('Habibullah');await expect(page.getByRole('link',{name:'Explore My Work'})).toBeVisible();await expect(page.locator('.monogram-fallback')).toBeVisible();await page.getByRole('link',{name:'Explore My Work'}).click();await expect(page.locator('h1')).toContainText('Ideas');await context.close();
});

test('informational routes have no automated WCAG A/AA violations',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});
 for(const path of ['/','/about','/projects','/services','/journal','/contact','/privacy']){
  await page.goto(path);
  const audit=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']).analyze();
  expect(audit.violations,`Accessibility violations on ${path}`).toEqual([]);
 }
});


test('portrait loads and first-visit intro finishes, replays and skips accessibly',async({page})=>{
 await page.goto('/');
 await page.waitForFunction(()=>sessionStorage.getItem('habibullah-intro')==='seen');
 const portrait=page.locator('.hero-portrait img');
 await expect(portrait).toHaveAttribute('alt','Portrait of Habibullah');
 await expect(portrait).toHaveJSProperty('complete',true);
 expect(await portrait.evaluate((image:HTMLImageElement)=>image.naturalWidth)).toBeGreaterThan(0);
 await expect(page.locator('.intro-overlay')).toBeHidden({timeout:5000});
 await page.getByRole('button',{name:'Replay intro animation'}).click();
 await expect(page.locator('.intro-overlay')).toBeVisible();
 await page.keyboard.press('Escape');
 await expect(page.locator('.intro-overlay')).toBeHidden();
 await page.emulateMedia({reducedMotion:'reduce'});
 await expect(page.getByRole('button',{name:'Replay intro animation'})).toBeHidden();
 await expect(page.locator('.creative-headline')).toBeVisible();
});


test('owner-confirmed project links filter personal and client work without invented case studies',async({page,request})=>{
 await page.goto('/projects');
 await expect(page.locator('.project-card')).toHaveCount(3);
 await expect(page.locator('.project-card[href="https://subecta.com/"]')).toContainText('Personal project');
 await expect(page.locator('.project-card[href="https://merctra.com/"]')).toContainText('Client work');
 await expect(page.locator('.project-card[href="https://elitejobshub.com/"]')).toContainText('Client work');
 await page.getByRole('button',{name:'Personal projects',exact:true}).click();await expect(page.locator('.project-card')).toHaveCount(1);
 await page.getByRole('button',{name:'Client work',exact:true}).click();await expect(page.locator('.project-card')).toHaveCount(2);
 expect((await request.get('/projects/subecta')).status()).toBe(404);
 await page.goto('/about');await expect(page.locator('#journey')).toContainText('Nexus Tech PK');await expect(page.locator('main')).not.toContainText('six-figure');
});
