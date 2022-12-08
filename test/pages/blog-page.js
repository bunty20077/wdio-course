

class BlogPage {


    get recentPostLocatorList(){
        return $$('#recent-posts-3 >ul > li');
    }

   
}

module.exports = new BlogPage();