import { ta } from 'trueautomation-helper';

describe('TrueAutomation.IO page', ()=> {

    it('should enter email to email field', ()=> {
        browser.url('http://trueautomation.io');
        browser.pause(5000);
        browser.click(ta('mainPage:login:loginButton', '#loginButton'));

        browser.pause(5000);
        browser.click('.login-btn');
        browser.click('.sign-up-container a');
        browser.setValue('*[name="email"]', 'your@gmail.com');
    });
});
