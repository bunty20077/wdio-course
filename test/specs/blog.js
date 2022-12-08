const HomePage = require('../pages/home-page');
const BlogPage = require('../pages/blog-page');

describe('Blog',() => {
    it('Open Blog page and get number of recent posts ', async ()=> {
        await HomePage.openurl();
        await HomePage.NavComponent.blogLink.click();
        const recentPost=await BlogPage.recentPostLocatorList.length;
        await expect(recentPost).toEqual(5);
    });

    it('Assert each text length is greater than 10 character',async()=>{

       const recentPostsList = await BlogPage.recentPostLocatorList;
        for(const item of recentPostsList){
            const recentPostItem =await item.getText();
            await expect(recentPostItem.length).toBeGreaterThan(10);
        }
    });
});