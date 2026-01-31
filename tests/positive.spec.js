// @ts-check
import { test, expect } from '@playwright/test';

const positiveCases=[
  {id:'Pos_Fun_0001',input:'mama heta shopping yanna hithan inne',expect:'මම හෙට shopping යන්න හිතන් ඉන්නේ'},
  {id:'Pos_Fun_0002',input:'mama gedhara enavaa eeth magee yaluvaa office ekee inne',expect:'මම ගෙදර එනවා ඒත් මගේ යලුවා office එකේ ඉන්නේ'},
  {id:'Pos_Fun_0003',input:'karuNaakaralaa magee resume eka review karanna puLuvandha?',expect:'කරුණාකරලා මගේ resume එක review කරන්න පුළුවන්ද?'},
  {id:'Pos_Fun_0004',input:'meeting eka 4.45 PM patan gannavaa',expect:'meeting එක 4.45 PM පටන් ගන්නවා'},
  {id:'Pos_Fun_0005',input:'api iiyee nuvara giyemu',expect:'අපි ඊයේ නුවර ගියෙමු'},
  {id:'Pos_Fun_0006',input:'issarahata yanna',expect:'ඉස්සරහට යන්න'},
  {id:'Pos_Fun_0007',input:'oyaata puLuvannam salli dhenna',expect:'ඔයාට පුළුවන්නම් සල්ලි දෙන්න'},
  {id:'Pos_Fun_0008',input:'mata eeka epaa!',expect:'මට ඒක එපා!'},
  {id:'Pos_Fun_0009',input:'oyaa adhadha enne?',expect:'ඔයා අදද එන්නෙ?'},
  {id:'Pos_Fun_00010',input:'lecture eka Zoom meeting ekak vidhihata thiyenne adha',expect:'lecture එක Zoom meeting එකක් විදිහට තියෙන්නෙ අද'},
  {id:'Pos_Fun_00011',input:'mata Rs. 2500 oonee',expect:'මට Rs. 2500 ඕනේ'},
  {id:'Pos_Fun_00012',input:'meeting eka 2026-05-21',expect:'meeting එක 2026-05-21'},
  {id:'Pos_Fun_00013',input:'mata mahansiyi ee nisaa poddak nidhaaganna oonee',expect:'මට මහන්සියි ඒ නිසා පොඩ්ඩක් නිදාගන්න ඕනේ'},
  {id:'Pos_Fun_00014',input:'hari lassanayi',expect:'හරි ලස්සනයි'},
  {id:'Pos_Fun_00015',input:'ela machan',expect:'එල මචන්'},
  {id:'Pos_Fun_00016',input:'api Colombo yamu',expect:'අපි Colombo යමු'},
  {id:'Pos_Fun_00017',input:'mama adha office giyaa.gihin thibba vaeda godak ivara karagaththaa. dhavalta lunch aran ivara velaa chairman va hambunaa.thava havasa meeting ekak thibunaa.iita passe gedhara aevillaa kaalaa biilaa nidhaagaththaa.pahuvadhaa nivaadu nisaa tikak hoDHAta nidhaaganna puluvan',expect:'මම අද office ගියා.ගිහින් තිබ්බ වැඩ ගොඩක් ඉවර කරගත්තා. දවල්ට lunch අරන් ඉවර වෙලා chairman ව හම්බුනා.තව හවස meeting එකක් තිබුනා.ඊට පස්සෙ ගෙදර ඇවිල්ලා කාලා බීලා නිදාගත්තා.පහුවදා නිවාඩු නිසා ටිකක් හොඳට නිදාගන්න පුලුවන්'},
  {id:'Pos_Fun_00018',input:'api okkoma ekathu velaa project eka ivara karaa',expect:'අපි ඔක්කොම එකතු වෙලා project එක ඉවර කරා'},
  {id:'Pos_Fun_00019',input:'mama dhaen vaeda karanavaa',expect:'මම දැන් වැඩ කරනවා'},
  {id:'Pos_Fun_00020',input:'eyaalaa adha enavaa',expect:'එයාලා අද එනවා'},
  {id:'Pos_Fun_00021',input:'oya monavadha karanne?',expect:'ඔය මොනවද කරන්නේ?'},
  {id:'Pos_Fun_00022',input:'api dhaen lunch ganna yanavaa.',expect:'අපි දැන් lunch ගන්න යනවා.'},
  {id:'Pos_Fun_00023',input:'mama udhee 6 ta nagitinavaa',expect:'මම උදේ 6 ට නගිටිනවා'},
  {id:'Pos_Fun_00024',input:'mata podi help ekak oonee?',expect:'මට පොඩි help එකක් ඕනේ?'},
]

test.beforeEach('word converter', async ({ page }) => {
  await page.goto('https://swifttranslator.com/');
  await page.waitForSelector('textarea',{state:'visible'})
});

//Checking Positive Values
for(const tc of positiveCases){
  test(tc.id, async ({ page },testInfo) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(tc.input);
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

