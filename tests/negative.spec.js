// @ts-check
import { test, expect } from '@playwright/test';

const negetiveCases=[
  { id: 'Neg_Fun_0001', input: 'mma gdr ynwa',expect:'මම ගෙදර යනවා'},
  { id: 'Neg_Fun_0002', input: 'mamagedharainneoyaenavanam',expect:'මමගෙදරඉන්නේඔයාඑනවනම්එන්න'},
  { id: 'Neg_Fun_0003', input: 'hariiiii lassanaiiiii',expect:'හරී ලස්සනයි' },
  { id: 'Neg_Fun_0004', input: 'mama adha office giyaa\nnamuth traffic nisaa velaa giyaa',
    expect:
    `මම අද office ගියා 
    නමුත් traffic නිසා වෙලා ගියා` },
  { id: 'Neg_Fun_0005', input: 'mama ### yanawaa',expect:'මම ### යනවා' },
  { id: 'Neg_Fun_0006', input: 'Please confirm the meeting ASAP',expect:'Please confirm the meeting ASAP' },
  { id: 'Neg_Fun_0007', input: 'MaMa GeDhArA YaNaVaA',expect:'මම ගෙදර යනවා' },
  { id: 'Neg_Fun_0008', input: 'main ghar ja raha hoon',expect:' ' },
  { id: 'Neg_Fun_0009', input: '<script>alert(1)</script>',expect:' ' },
  { id: 'Neg_Fun_0010', input: 'mama_gedhara_yanavaa',expect:'මම ගෙදර යනවා' }
];


test.beforeEach('word converter', async ({ page }) => {
  await page.goto('https://swifttranslator.com/');
  await page.waitForSelector('textarea',{state:'visible'})
});

//checking Negetive test cases
for(const tc of negetiveCases){
  test(tc.id, async ({ page },testInfo) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(tc.input);
    await page.waitForTimeout(2000);
    const result=page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
    await expect(result).toHaveText(tc.expect);

    //Test info Body
    await testInfo.attach('Test-Data',{
      body:`
      Input:${tc.input}
      Expected:${tc.expect}
      Actual:${(await result.textContent())}
      `
    })


  })
};
