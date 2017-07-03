import pages from '../pageObjects';
import fw from '../framework';

export class HomePage {

    constructor() {
        // Page locators
        this.searchField    = element(by.css('.container #search-input'))
        this.navArrow       = element(by.css('.icon-next'))
        this.getStartButton = element(by.cssContainingText('.btn-brand', 'Get Started'))
        this.login          = element(by.css('.home .pull-right ul li:last-child'))
        this.emailField     = element(by.css("input[name='email']"))
        this.passwordField  = element(by.css("input[type='password']"))
        this.submit         = element(by.css("input[type='submit']"))
        this.navBarProducts = element(by.xpath("//a[text()='Products']"))
        this.identityHeader = element(by.cssContainingText('.title', 'Remedyforce'))
        
        // Pages text
        this.Administration = 'Administration'
        this.threeCharTitle = 'BMC'
        this.twoCharTitle   = 'BM'
        this.fullNameTitle  = 'BMC Software'
        this.incorrectTitle = 'Test for Incorrect title'
        this.message        = 'Type at least 3 characters to search'
        this.messageIncorrectResult = 'No Results'
        this.adminEmail     = 'anastasiia_chechyna_tp@bmc.com'
        this.adminPassword  = 'P@ssword01'
       
    }
    
    expandProductsList(){
            this.navBarProducts.click()
            return this
        }
    dropDownItem(item) {
            return element(by.xpath(`//*[contains(@class, "dropdown-menu")]//a[text()="${item}"]`));
    }
    
    openRemedyforceProductsMP(item){
            this.dropDownItem(item).click()
            fw.CommonActions.waitForElementVisible(this.identityHeader, 10)
            return pages.RemedyforcePage
       
        }
    searchProduct(title = '') {
            this.searchField.sendKeys(title) 
            fw.CommonActions.wait(5)
            return this          
    }

    getAllResults() {
            return $$(".row .name-container a[href^='/companies/']")
    }
    
    getMessage(){
            return element(by.css('.container .search-messages'))
    }
    
    bannerNavigationArrow(){
            this.navArrow.click()
            return this
    }       

    getStartedPage(){
        this.getStartButton.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                var newWindowHandle = handles[1] // this is your new window
                    browser.switchTo().window(newWindowHandle).then(function () {
                
                console.log(newWindowHandle)
            })
        })
    })
}       

    openLoginForm(){
            this.login.click()
            fw.CommonActions.waitForElementVisible(this.emailField, 5)
            return this
    }

    filledAdminCredentials(email = '', password = ''){
            this.emailField.sendKeys(email);
            this.passwordField.sendKeys(password);
            return this
    }

    submitLoginForm(){
            this.submit.click()
            fw.CommonActions.waitForElementClickable(this.AdministrationPanel(), 5)
            return this
    }

    AdministrationPanel(){ 
            return element(by.css("a[href*='/admin']"))
    }


}


//module.exports.HomePage = HomePage