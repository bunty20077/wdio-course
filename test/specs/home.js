
const HomePage = require('../pages/home-page');

describe('Home',() => {

    beforeEach(async() =>{
        console.log('This block runs before every test');
        await HomePage.openurl();
    })

    afterEach(async() =>{
        console.log('This block runs after every test');
       
    })
     it('Open URL and assert Title', async ()=> {
        // Open `url`
       
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });

    it('Open About US URL and assert `url`', async ()=> {
        await browser.url('https://practice.automationbro.com/about');
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');
    }); 

    it('Click on get Start button and assert `url` contains get-started', async ()=> {

        await HomePage.btnGetStarted.click();
        await expect(browser).toHaveUrlContaining('get-started');
    });


    it('Click on get Logo Image and assert `url` doesnot contains get-started', async ()=> {

        await HomePage.imgLogo.click();
        await expect(browser).not.toHaveUrlContaining('get-started');
    });


    it('Find Head Element and assert the text', async ()=> {

        const headingText =  await HomePage.headingElement.getText();
        await expect(headingText).toEqual('You are Think different. Make different.');
    });
    
});