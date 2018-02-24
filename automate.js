const puppeteer = require('puppeteer');
const {username, password, about} = require('./constant');
 
const automate = async () => {
  const browser = await puppeteer.launch({ 
      headless: false,
      args: [
        `--window-size=${ 1024 },${ 700 }`
    ],
  });
  const page = await browser.newPage();
  await page.setViewport({ width:1224, height: 700 })
  await page.goto('https:angel.co');
  await page.click('#root > div.header_nav.flush_bottom.dl85.layouts.fhr17.header._a._jm > div > div > div.s-grid-colSm24 > div.searchAndLinks.u-floatRight.u-borderBox > div > div.s-flexgrid0-colSm.linksContainer.respondToNavbarHeight.u-floatRight > div:nth-child(1) > a.auth.login.u-fontWeight300');
  await page.waitFor(5000);
  await page.keyboard.type(username);
await page.click('#user_password');
  await page.keyboard.type(password);
await page.click('#new_user > div:nth-child(6) > input')
await page.waitFor(5000);
await page.goto('https:angel.co/jobs');
await page.waitFor(5000);
await page.click('#startups_content > div.djl87.job_listings.fbs55.browse_startups._a._jm > div.find.g-module.gray.hidden.shadow_no_border.startup-container > div > div > div.djl87.job_listings.fbw9.browse_startups_table_row._a._jm.expanded > div.action-bar.browse_startup_action_bar > table > tbody > tr > td.right-corner > div > div.buttons > a.g-button.blue.apply-now-button');
await page.waitFor(5000);
await page.keyboard.type(about);

await page.click('#layouts-base-body > div.ReactModalPortal > div > div > div > div._1xXo9j7wJhYoCN1vk_CNsT.action-bar > div > div:nth-child(3) > button');
await page.waitFor(2000);
// #layouts-base-body > div.ReactModalPortal > div > div > div > div._3Aslx7L3GVI4XM7PUyYKza.action-bar > div > div:nth-child(4) > button
  await browser.close();
};
module.exports= automate;