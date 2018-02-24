var automate =require('./automate');
var { range} = require('./constant');
const puppeteer = require('puppeteer');
(async () => {
  for(let x = 1; x < range; x++)
  {
    console.log(x);
await automate();
  }
})();
