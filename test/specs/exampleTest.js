describe('TrueAutomation.IO page', ()=> {

    it('should enter email to email field', ()=> {
        browser.url('http://trueautomation.io');
        browser.click('.login-btn1');
        browser.click('.sign-up-container a');
        browser.setValue('*[name="email"]', 'your@gmail.com');
    });

    it('should login with correct email and correct password', ()=> {
        browser.url('http://trueautomation.io');
        browser.click('.login-btn');
        browser.setValue('[name="username"]', 'pyavchik@gmail.com');
        browser.setValue('[name="password"]', 'Pa244646');
        browser.click('[class="btn login-btn"]');
        browser.waitForVisible('[class=styles-firstName-2zNkg]');
        //browser.pause(5000);
    });

    it('should login with correct email and wrong password', ()=> {
        browser.url('http://trueautomation.io');
        browser.click('.login-btn');
        browser.setValue('[name="username"]', 'pyavchik@gmail.com');
        browser.setValue('[name="password"]', 'Pa2446461');
        browser.click('[class="btn login-btn"]');
        browser.waitForVisible('[class=styles-firstName-2zNkg]');
        //browser.pause(5000);
    });

    it('should login with wrong email and correct password', ()=> {
        browser.url('http://trueautomation.io');
        browser.click('.login-btn');
        browser.setValue('[name="username"]', 'pyavchik@gmail.com1');
        browser.setValue('[name="password"]', 'Pa244646');
        browser.click('[class="btn login-btn"]');
        browser.waitForVisible('[class=styles-firstName-2zNkg]');
        //browser.pause(5000);
    });
});
