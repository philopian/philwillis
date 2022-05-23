import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/')
  const title = page.locator('.navbar__inner .navbar__title')

  // test.setTimeout(120000)
  await expect(title).toHaveText('Playwright')
})
