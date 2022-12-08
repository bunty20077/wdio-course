

class ContactPage {

    get nameField(){
        return $('.evf-frontend-grid > div:first-child >input');
    }
    get emailField(){
        return $('.evf-frontend-grid > div:nth-child(2) >input');
    }
    get phoneNumberField(){
        return $('.evf-frontend-grid > div:nth-child(3) >input');
    }
    get messageField(){
        return $('.evf-frontend-grid > div:last-child >textarea');
    }

    get submitBtn(){
        return $('.evf-submit-container  > button');
    }

    get contactSubmitSuccessMsg(){
        return $('.everest-forms-notice');
    }

    async submitForm(name , email , phoneNumber , message){

        await this.nameField.setValue(name);
        await this.emailField.setValue(email);
        await this.phoneNumberField.setValue(phoneNumber);
        await this.messageField.setValue(message);
        await this.submitBtn.click();
    }  
}

module.exports = new ContactPage();