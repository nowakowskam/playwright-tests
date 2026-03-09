import { test, expect } from '@playwright/test';



test('Button section - button displays correct status after clicking', async ({ page }) => {
const buttonLoadTimeout = 2000;
const paymentGateTimout = 30000; // payment gate can response in up to 30 seconds
await page.goto('playground/');
// await page-getByTestId('btn-click-me').click();
// // await page.locator ('#btn-click-me').click();
await page.getByRole('button', { name: 'Click me' }).click();
// await page locator('#btn-click-me').click();
await expect(page.getByTestId('btn-state')).toContainText('Status: clicked');
// await page. locator('#btn-click-me') .click();
await page.getByRole('button', { name: 'clicked' }).click();
await expect(page.getByTestId('btn-state')).toContainText('Status: idle');
// await page-getByText( 'Click me').click()
});


// @ts-check
test('Page has correct tile', async ({ page }) => {

  await page.goto('/');

  // Expect a title "to contain" a substring.

  await expect(page).toHaveTitle(/playwright/);

  await expect(page).toHaveTitle('Testowy Sklep – Strona główna');

});

test('Button with timer - single click', async ({page}) => {

  

  const buttonLoadTimeout = 7000; // button can be updated in beetween 3 and 7 seconds

 

  await page.goto('playground/');

  await expect(page.getByRole('heading', {name: 'Timer Button'})).toBeVisible();

 

  await expect(page.getByTestId('timer-result')).toContainText('Waiting for click');

  await page.getByTestId('timer-btn').click();

  await expect(page.getByTestId('timer-result')).toHaveText('Processing...');

  await expect(page.getByTestId('timer-result')).toHaveText('Complete', {timeout: buttonLoadTimeout});

});

test('Button with timer - multiple click', async ({page}) => {

  

  const buttonLoadTimeout = 7000; // button can be updated in beetween 3 and 7 seconds

 

  await page.goto('playground/');

  await expect(page.getByRole('heading', {name: 'Timer Button'})).toBeVisible();

 

  await expect(page.getByTestId('timer-result')).toContainText('Waiting for click');

  await page.getByTestId('timer-btn').click();

  await expect(page.getByTestId('timer-result')).toHaveText('Processing...');

  await expect(page.getByTestId('timer-result')).toHaveText('Complete', {timeout: buttonLoadTimeout});

    await page.getByTestId('timer-btn').click();

  await expect(page.getByTestId('timer-result')).toHaveText('Processing...');

  await expect(page.getByTestId('timer-result')).toHaveText('Complete', {timeout: buttonLoadTimeout});

});