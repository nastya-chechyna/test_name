let HomePage = require('../pageObjects/HomePage.js').HomePage


describe('Search tests', function () {
    let homePage = new HomePage()
    browser.ignoreSynchronization = true;

    it('Result should be displayed when full title provided', function() {
        homePage.searchProduct(homePage.fullNameTitle)
        expect(homePage.getAllResults().getText()).toContain(homePage.fullNameTitle, 'Title should contain 3 or more characters')
              
    })
    
    it('[Type at least 3 characters to search] text should be displayed when less then 3 charecters provided', function() {
        homePage.searchProduct(homePage.twoCharTitle)
        expect(homePage.getMessage().getText()).toBe(homePage.message, 'You provide more then 3 charecters')
    })
    
    it('No result message showing up when incorrect title provided', function() {
        homePage.searchProduct(homePage.incorrectTitle)
        expect(homePage.getMessage().getText()).toBe(homePage.messageIncorrectResult, 'You provide correct title or title with less then 3 charecters')
    })
    
    xit('Get started button redirects to Developers portal and opens is new tab', function(){
        homePage.getStartedPage()
        expect(browser.getCurrentUrl()).toBe('https://developers.bmc.com/site/global/home/index.gsp')
    })
    
   })