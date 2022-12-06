
describe('Blog',() => {
    it('Open Blog page and get number of recent posts ', async ()=> {
        await browser.url('/');
        await $('#primary-menu > li:nth-child(4)').click();
        const recentPost=await $$('#recent-posts-3 >ul > li').length;
        await expect(recentPost).toEqual(5);
    });

    it('Assert each text length is greater than 10 character',async()=>{

        const recentPostsList=await $$('#recent-posts-3 >ul > li');

        for(const item of recentPostsList){
            const recentPostItem =await item.getText();
            await expect(recentPostItem.length).toBeGreaterThan(10);
        }
    });
});