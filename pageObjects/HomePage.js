class HomePage {

    constructor() {
      
        this.searchField = $('.container #search-input')
        this.threeCharTitle = 'BMC'
        this.twoCharTitle = 'BM'
        this.fullNameTitle = 'BMC Software'
        this.incorrectTitle = 'Test for Incorrect title'
        this.message = 'Type at least 3 characters to search'
        this.messageIncorrectResult = 'No Results'
        this.navArrow = $('.icon-next')
        this.getStartedButton = $("a[href='https://developers.bmc.com/']")
    }

    searchProduct(title = '') {
        this.searchField.sendKeys(title) 
        browser.sleep(5000)
        //       browser.wait(EC.visibilityOf($("#search-bar-messages")), 10000,
        //    'Search result should be displayed after 3+ charecters typing')
        // // browser.wait(EC.visibilityOf($(".container .search-results")), 10000,
        // //    'Search result should be displayed after 3+ charecters typing')
     
    }

    getAllResults() {
        return $$(".row .name-container a[href^='/companies/']")
            }
    
    getMessage(){
        return $('.container .search-messages')
    }
    
    bannerNavigationArrow(){
        this.navArrow.click()

    }       

    getStartedPage(){
        this.bannerNavigationArrow()
        this.getStartedButton.click().then(function () {
        browser.getAllWindowHandles().then(function (handles) {
            var newWindowHandle = handles[1] // this is your new window
            browser.switchTo().window(newWindowHandle).then(function () {
                console.log(newWindowHandle)
            })
        })
    })
        
        

    }
        
    
    // arraySearch(){  
    //     let arrayAllResults = []
    //     let result = []
        
    //     this.getAllResults.getText().then(function (title) {
    //               arrayAllResults.push(title)
    //    })
    //    this.arrayAllResults
    //             for (let i = 0; i < arrayAllResults.length; i++){
    //              if (title === 'BMC Software'){
    //                 result.push(i)
                
    //             }  
    //         }
    //             //console.log(arrayAllResults)
    //             console.log(result)
         
        
        
    // }
}


module.exports.HomePage = HomePage