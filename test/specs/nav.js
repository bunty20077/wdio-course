

describe('Home',() => {
    it('Open Nav URL and assert Title', async ()=> {
        await browser.url('/');
        
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];

        const actualLinks = [];
        //Simple way of accessing elements
       // const navLinks =  await $('#primary-menu').$$('li[id*=menu]');
       //Aaccessing elements directly
        const navLinks =  await $$('#primary-menu li[id*=menu]');
        for(const link of navLinks){
            actualLinks.push(await link.getText());
        }
        await expect(expectedLinks).toEqual(actualLinks);
    });
});