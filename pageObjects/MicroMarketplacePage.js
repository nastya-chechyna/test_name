class MicroMarketplacePage {

    constructor(){
        this.clickOnProducts = $(".nav .dropdown")
        this.RemedyMP= $('a[href$="/remedy"]')
        this.RemedyforceMP = $('a[href$="/remedyforce"]')
        this.startYourFreeTrialButton = $("a[href*='http://www.bmc.com/forms/ITSM-RF-Trial']")
        this.videoPopup = $("a[class*='btn-video']") 
        
       
        }
        openRemedyProductsMP(){
        this.clickOnProducts.click()
        this.RemedyMP.click()
        browser.sleep(1000)
    }

        openRemedyforceProductsMP(){
        this.clickOnProducts.click()
        this.RemedyforceMP.click()
        browser.sleep(5000)
       
    }

    getRemdyPlatformProducts() {
        return $$("a[href='/search;categories=157;orderBy=created_at;orderDirection=desc']")
        
    }
    getRemedySMSProducts(){
        return $$("a[href$='/search;categories=158;orderBy=created_at;orderDirection=desc']")
    }
    getAtriumCMDBProducts(){
        return $("a[href$='/search;categories=160;orderBy=created_at;orderDirection=desc']")
    }

    getRemedyforceProducts(){
        return $("a[href$='/search;categories=136;orderBy=created_at;orderDirection=desc']")
    }
    getOpenbannerYoutubeVideo(){
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement())
        return $('.video-stream')
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

    }

    openVideoPopup(){
        this.videoPopup.click()
        browser.sleep(5000)
        //Open in full screen 
        // browser.actions().
        //     mouseMove({x: 50, y: 0}).
        //     doubleClick().
        //     perform()


    }

}



module.exports.MicroMarketplacePage = MicroMarketplacePage