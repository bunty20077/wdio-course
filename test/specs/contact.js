

describe('Contact',() => {
    it('Open Contact URL and Fill The form', async ()=> {
        await browser.url('/');
        //Click on Contact
        await $('#primary-menu > li:nth-child(5)').click();

        await $('.evf-frontend-grid > div:first-child >input').setValue('Sayantan');
        await $('.evf-frontend-grid > div:nth-child(2) >input').setValue('testsayantan@gmail.com');
        await $('.evf-frontend-grid > div:nth-child(3) >input').setValue('9876543210');
        await $('.evf-frontend-grid > div:last-child >textarea').setValue('This is a text area .');     
        await $('.evf-submit-container  > button').click();
       

    });
});