const HomePage = require("../pages/home-page");


describe('Home',() => {
    it('Open Nav URL and assert Title', async ()=> {
        await HomePage.openurl();
        
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];

        const actualLinks = [];
        const navLinks =  await HomePage.NavComponent.linksNavMenu ;
        for(const link of navLinks){
            actualLinks.push(await link.getText());
            
        }
        await expect(expectedLinks).toEqual(actualLinks);
    });
});