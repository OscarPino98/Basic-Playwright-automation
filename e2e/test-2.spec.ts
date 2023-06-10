import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=gooog&oq=gooog&aqs=chrome..69i57.1520j0j2&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Google google.com https://www.google.com › ...' }).click();
  await page.getByRole('combobox', { name: 'Buscar' }).click();
  await page.getByRole('combobox', { name: 'Buscar' }).fill('sfhjsdhfjskfhkjsdf');
  await page.getByRole('combobox', { name: 'Buscar' }).press('Enter');
  await page.getByRole('combobox', { name: 'Buscar' }).click();
  await page.getByText('Asegúrate de que todas las palabras estén escritas correctamente.').click({
    clickCount: 3
  });
});