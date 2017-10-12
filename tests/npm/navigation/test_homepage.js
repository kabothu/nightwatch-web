module.exports = {
    after : function(browser) {
        browser.end();
    },
    'Load npm homepage' : function (browser) {
        var home = browser.page.homepage()
        browser.init()//this auto grabs launch_url value from nightwatch.json
        browser.assert.title("npm");
    }
};