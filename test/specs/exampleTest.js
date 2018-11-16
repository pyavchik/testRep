describe('TrueAutomation.IO page', ()=> {

    it('should enter email to email field', ()=> {
        browser.url('http://trueautomation.io');
        browser.click('.login-btn');
        browser.click('.sign-up-container a');
        browser.setValue('*[name="email"]', 'your@gmail.com');
    });
});
