
const HomePage = require('../pages/home-page');

describe('Home',() => {

     it('Open URL and assert Title', async ()=> {
        // Open `url`
        await HomePage.openurl();
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });

    it('Open About US URL and assert `url`', async ()=> {
        await browser.url('https://practice.automationbro.com/about');
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');
    }); 

    it('Click on get Start button and assert `url` contains get-started', async ()=> {
         // Open `url`
        await HomePage.openurl();
        await HomePage.btnGetStarted.click();
        await expect(browser).toHaveUrlContaining('get-started');
    });


    it('Click on get Logo Image and assert `url` doesnot contains get-started', async ()=> {
         // Open `url`
        await HomePage.openurl();
        await HomePage.imgLogo.click();
        await expect(browser).not.toHaveUrlContaining('get-started');
    });


    it('Find Head Element and assert the text', async ()=> {
         // Open `url`
        await HomePage.openurl();
        const headingText =  await HomePage.headingElement.getText();
        await expect(headingText).toEqual('Think different. Make different.');
    });
    
});