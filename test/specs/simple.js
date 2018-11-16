// example of a test group
// note: all tests under the test directory are ran

describe('TrueAutomation.IO page', ()=> {
    beforeEach(() => {
        browser.url("http://trueautomation.io");
    });

    it('should demonstrate the scroll command', function () {
        $('[href="https://app.trueautomation.io/auth/signin"]').click();
        $('[href="signup"]').click();
        $('[placeholder="Email"]').setValue('your@gmail.com');
    });

});
