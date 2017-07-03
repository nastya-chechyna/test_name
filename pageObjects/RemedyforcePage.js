import pages from '../pageObjects';
import fw from '../framework';

export class RemedyforcePage {

    constructor() {
        // Pages locator
        this.startYourFreeTrialButton = element(by.cssContainingText('.btn-brand', 'Start your free trial'))
        this.videoPopup         = element(by.cssContainingText('.btn-video', 'Watch The Video'))
        this.productLogo        = element(by.css('.tile-text .tile-title'))
        this.contactFormButton  = element(by.css("button[type='submit']"))
        this.firstNameField     = element(by.css("input[name='lead[first_name]']"))
        this.lastNameField      = element(by.css("input[name='lead[last_name]']"))
        this.emailField         = element(by.css("input[name='lead[email]']"))
        this.phoneField         = element(by.css("input[name='lead[address_attributes][phone_number]']"))
        this.companyNameField   = element(by.css("input[name='lead[company_name]']"))
        this.countryField       = element(by.css("input[name='lead[address_attributes][country_id]']"))
        this.commentsField      = element(by.css("textarea[name='lead[description]']"))
        this.countryFieldId     = element(by.css("option[value='11']"))
        this.agreeButton        = element(by.css("input[name='lead[agreement]']"))
        this.lastp = element(by.css("input[name='lead[agreement]']"))
    }
    


        // getRemdyPlatformProducts() {
        //     return $$("a[href='/search;categories=157;orderBy=created_at;orderDirection=desc']")
            
        // }
        // getRemedySMSProducts(){
        //     return $$("a[href$='/search;categories=158;orderBy=created_at;orderDirection=desc']")
        // }
        // getAtriumCMDBProducts(){
        //     return $("a[href$='/search;categories=160;orderBy=created_at;orderDirection=desc']")
        // }

        getRemedyforceProducts(){
            return element(by.cssContainingText('.slider-header', 'Remedyforce '))
            
        }
        getOpenbannerYoutubeVideo(){
            return element(by.tagName('iframe'))
        }
            
        bannersButtonOpenPage(){
            this.startYourFreeTrialButton.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                var newWindowHandle = handles[1] // this is your new window
                browser.switchTo().window(newWindowHandle).then(function () {
                    console.log(newWindowHandle)
                })
                })
            })
            return this
        }

        openVideoPopup(){
            this.videoPopup.click()
            fw.CommonActions.wait(5)
            return this
            //Open video in full screen 
            // browser.actions().
            //     mouseMove({x: 50, y: 0}).
            //     doubleClick().
            //     perform()
    }

        openFirstProductProfile(){
            fw.CommonActions.waitForElementVisible(this.productLogo, 5)
            this.productLogo.click()
            //fw.CommonActions.waitForElementVisible(this.contactFormButton, 5)
            return this
            }

        filledContactForm(firstName = '', lastName = '', email = '',
                         phone = '', companyName = '',comments = ''){
            fw.CommonActions.waitForElementVisible(this.contactFormButton, 5)
            this.contactFormButton.click()
            fw.CommonActions.wait(2)
            this.firstNameField.sendKeys(firstName)
            this.lastNameField.sendKeys(lastName)
            this.emailField.sendKeys(email)
            this.phoneField.sendKeys(phone)
            this.companyNameField.sendKeys(companyName)
            this.countryFieldId.click()
            this.commentsField.sendKeys(comments)
            
            // fw.CommonActions.scrollToElement(this.lastp)
            // console.log(this.lastp)
            //var scrolling = browser.executeScript("$('return .col-md-6 .agreement').scrollTop(100);")
            // var lastElement = element(by.css("div[class='agreement']"));
            // browser.executeScript('arguments[0].scrollIntoView()', lastElement.getWebElement())
            // browser.pause()
                  function move_down() {
    document.getElementById('divElem').scrollTop -= 10;
  }



        }
}



//module.exports.RemedyforcePage = RemedyforcePage