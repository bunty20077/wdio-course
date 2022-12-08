const NavComponent = require('../pages/components/nav-comp')

class HomePage {

openurl(){
    return browser.url("/");
}
/**
 * Locators are defined in form of Getter Methods
 */

get btnGetStarted(){
    return $('#get-started');
}

get imgLogo(){
    return $('//img[@alt="Practice E-Commerce Site"]');
}

get headingElement(){
    return $('.elementor-widget-container > h1');
}

get NavComponent() {
    return NavComponent;
}

}

module.exports = new HomePage();