import { test, expect } from '@playwright/test'
test.describe('About Page Tests', () => {
  test('can access about page by clicking `about` menu', async ({ page }) => {
    await page.goto('/')
    await page.getByText('אודות').click()
    await expect(page).toHaveURL(/about/)
    const locator = page.getByText('אודות')
    await expect(locator).toHaveClass('menu-item active')
  })
  test('page display title `מהו אתר “דאטאבוס”?`', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: 'מהו אתר “דאטאבוס”?' })).toBeVisible()
  })
  test('clicking dontaions link should lead to sadna site', async ({ page }) => {
    await page.goto('/about')
    await page.getByRole('link', { name: 'תרומות קטנות נוספות' }).click()
    await page.getByRole('heading', { name: 'הסדנא לידע ציבורי פותחת ומנגישה מידע' }).waitFor()
  })
})
