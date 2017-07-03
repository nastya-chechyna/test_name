import pages from '../pageObjects';
import fw from '../framework';

let HomePage = require('../pageObjects/HomePage.js').HomePage


describe('Search tests', function () {
    //let pages.HomePage = new pages.HomePage()
    browser.ignoreSynchronization = true;

    it('Result should be displayed when full title provided', function() {
       pages.HomePage
            .searchProduct(pages.HomePage.fullNameTitle)
        expect(pages.HomePage.getAllResults().getText()).toContain(pages.HomePage.fullNameTitle, 'Title should contain 3 or more characters')
              
    })
    
    it('[Type at least 3 characters to search] text should be displayed when less then 3 charecters provided', function() {
        pages.HomePage
            .searchProduct(pages.HomePage.twoCharTitle)
        expect(pages.HomePage.getMessage().getText()).toBe(pages.HomePage.message, 'You provide more then 3 charecters')
    })
    
    it('No result message showing up when incorrect title provided', function() {
        pages.HomePage
            .searchProduct(pages.HomePage.incorrectTitle)
        expect(pages.HomePage.getMessage().getText()).toBe(pages.HomePage.messageIncorrectResult, 'You provide correct title or title with less then 3 charecters')
    })
    
    it('Get started button should redirect to Developers portal and opens is new tab', function(){
        pages.HomePage
            .bannerNavigationArrow()
            .getStartedPage()
        expect(browser.getCurrentUrl()).toBe('https://developers.bmc.com/site/global/home/index.gsp')
    })
    
    it("Login with valid MP Admin credentails ", function() {
        pages.HomePage
            .openLoginForm()
            .filledAdminCredentials(pages.HomePage.adminEmail, pages.HomePage.adminPassword)
            .submitLoginForm()
         expect(pages.HomePage.AdministrationPanel().getText()).toBe(pages.HomePage.Administration, 'You are not login to MP')
        
        })
   })