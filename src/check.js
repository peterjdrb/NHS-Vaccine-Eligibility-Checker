const puppeteer = require('puppeteer');
const notifier = require('node-notifier');

const data = require('../data.json');

module.exports.NHSVaccine = async () => {

    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox'],
    });
    const page = await browser.newPage();

    //Get data by nhs number
    await page.goto('https://www.nhs.uk/book-a-coronavirus-vaccination/do-you-have-an-nhs-number', { timeout: 30000, waitUntil: 'domcontentloaded' });
    await page.click('input[id=option_No_input]');
    await page.keyboard.press('Enter')
    await page.waitForNavigation({waitUntil: 'networkidle2'});

    //Enter Name
    await page.type('input[id=Firstname]', data.firstName);
    await page.type('input[id=Surname]', data.surname);
    await page.keyboard.press('Enter')
    await page.waitForNavigation({waitUntil: 'networkidle2'});

    //Enter date of birth
    await page.type('input[id=Date_Day]', data.dob.day);
    await page.type('input[id=Date_Month]', data.dob.month);
    await page.type('input[id=Date_Year]', data.dob.year);
    await page.keyboard.press('Enter')
    await page.waitForNavigation({waitUntil: 'networkidle2'});

    //Enter postcode
    await page.type('input[id=Postcode]', data.postcode);
    await page.keyboard.press('Enter')
    await page.waitForNavigation({waitUntil: 'networkidle2'});

    //Print Title
    const heading = await page.evaluate( () => {
    const dom = document.querySelector('h1')
    return dom.innerText
    })

    if (heading === 'You are not currently eligible to book through this service') {
        notifier.notify({
            title: 'Not yet :(',
            message: "You're not quire ready to get your vaccine just yet"
          });
    } else {
        notifier.notify({
            title: 'Breaking News!',
            message: "You might be eligible to get a vaccine. Go to the nhs website to check!",
          });
    }

    await browser.close();
}; 