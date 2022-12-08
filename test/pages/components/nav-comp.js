class NavComponent {


    get linksNavMenu(){
        return $$('#primary-menu li[id*=menu]');
    }

    get contactLink(){
        return $('#primary-menu > li:nth-child(5)');
    }
    get blogLink(){
        return $('#primary-menu > li:nth-child(4)');
    }

}

module.exports = new NavComponent();