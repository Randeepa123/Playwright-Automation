// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach('word converter', async ({ page }) => {
  await page.goto('https://swifttranslator.com/');
  await page.waitForSelector('textarea',{state:'visible'})
});

//testing Ui cases
test('Pos_UI',async({page})=>{
  await page.getByLabel('Clear').click();
  const response= page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await expect(response).toHaveValue('');
  
})
