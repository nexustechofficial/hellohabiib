import { defineConfig } from '@playwright/test';
export default defineConfig({testDir:'./tests/e2e',workers:2,use:{baseURL:process.env.TEST_BASE_URL||'http://127.0.0.1:5173',launchOptions:{executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE||'/usr/bin/chromium',args:['--no-sandbox']},headless:true},reporter:'list'});
