
const ContactPage = require('../pages/contact-page');
const HomePage = require('../pages/home-page');

describe('Contact',() => {
    it('Open Contact URL and Fill The form', async ()=> {
        await HomePage.openurl();
        
        await HomePage.NavComponent.contactLink.click();
        await ContactPage.submitForm('Sayantan','testsayantan@gmail.com','9876543210','This is a text area .');
   
        const successMsg = await ContactPage.contactSubmitSuccessMsg.getText();
        await expect(successMsg ).toEqual('Thanks for contacting us! We will be in touch with you shortly');
    });
});