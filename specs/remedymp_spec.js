//let MicroMarketplacePage = require('../pageObjects/MicroMarketplacePage.js').MicroMarketplacePage

    describe('Remedy Marketplace tests', function() {
        let remedymp = new MicroMarketplacePage()

            it('Remedy marketplace should be open and MP should contain profucts  tagged to: Remedy Platform, Remedy Service Management Suite, Atrium CMDB ', function() {
                browser.ignoreSynchronization = true;
                
                remedymp.openRemedyProductsMP()
                expect(remedymp.getRemdyPlatformProducts().isPresent()).toBeTruthy()
                expect(remedymp.getRemedySMSProducts().isPresent()).toBeTruthy()
                expect(remedymp.getAtriumCMDBProducts().isPresent()).toBeTruthy()
                 browser.ignoreSynchronization = false;

    })

            xit('Product should be tagged to Remedy Platform category', function(){
                
            })
    })