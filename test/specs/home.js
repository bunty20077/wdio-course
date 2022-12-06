//https://practice.automationbro.com/

describe('Home',() => {
    it('Open URL and assert Title', async ()=> {
        await browser.url('https://practice.automationbro.com/');
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });

    it('Open About US URL and assert Url', async ()=> {
        await browser.url('https://practice.automationbro.com/about');
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');
    });

    it('Click on get Start button and assert Url contains get-started', async ()=> {
        await browser.url('https://practice.automationbro.com');
        await $('#get-started').click();
        await expect(browser).toHaveUrlContaining('get-started');
    });


    it('Click on get Logo Image and assert Url doesnot contains get-started', async ()=> {
        await browser.url('https://practice.automationbro.com');
        await $('//img[@alt="Practice E-Commerce Site"]').click();
        await expect(browser).not.toHaveUrlContaining('get-started');
    });


    it('Find Head Element and assert the text', async ()=> {
        await browser.url('https://practice.automationbro.com');
        const headingText =  await $('.elementor-widget-container > h1').getText();
        await expect(headingText).toEqual('Think different. Make different.');
    });



    it('Find Head Element and assert the text', async ()=> {
        await browser.url('https://practice.automationbro.com');
        const headingText =  await $('.elementor-widget-container > h1').getText();
        await expect(headingText).toEqual('Think different. Make different.');
    });
});