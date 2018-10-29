const puppeteer = require('puppeteer');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function catcher(reason) {
    console.error(reason);
}

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080
    });

    await page.goto('http://example.com').catch(catcher);
    await sleep(200);

    console.log("SUCCESS");

    while (true) await sleep(1000);
})();