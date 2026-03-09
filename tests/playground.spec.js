// @ts-check
import { test } from '@playwright/test';
import { Playground } from '../pages/playground';

test.beforeEach(async ({ page }) => {

  const playground = new Playground(page);
  await playground.navigateTo();

});


test('Button section - button displays correct status after clicking', async ({ page }) => {

  const playground = new Playground(page);
  await playground.clickButtonInGivenState(true);
  await playground.clickButtonInGivenState(false);

});


test('Button with timer - single click', async ({ page }) => {

  const playground = new Playground(page);
  await playground.verifyTimerInitialState();
  await playground.runTimerOnce();

});


test('Button with timer - multiple click', async ({ page }) => {

  const playground = new Playground(page);
  await playground.verifyTimerInitialState();
  await playground.runTimerOnce();
  await playground.runTimerOnce();

});