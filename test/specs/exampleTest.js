const ta = require('trueautomation-helper').ta;


describe('TrueAutomation.IO page', () => {
    it('should enter email to email field', () => {
        browser.url('http://trueautomation.io');
        browser.click(ta('mainPage:login:loginButton', 'a.login-btn'));
    });
});
