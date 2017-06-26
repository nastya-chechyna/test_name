let MicroMarketplacePage = require('../pageObjects/MicroMarketplacePage.js').MicroMarketplacePage

    describe('Remedyforce Marketplace tests', function(){
        let remedyforcemp = new MicroMarketplacePage()
        //browser.ignoreSynchronization = true
        it('Remedyforce marketplace should be open and MP should contain Remedyforce products ', function() {
//browser.ignoreSynchronization = true
            
                remedyforcemp.openRemedyforceProductsMP()
                expect(remedyforcemp.getRemedyforceProducts().isPresent()).toBeTruthy()
                //browser.ignoreSynchronization = false
                
    })

        it('Start your free trial button should redirect to Registartion form and open in new tab', function(){
            remedyforcemp.openRemedyforceProductsMP()
            remedyforcemp.bannersButtonOpenPage()
            expect(browser.getCurrentUrl()).toBe('http://www.bmc.com/forms/ITSM-RF-TrialFY15-BMCCom.html?cid=oa-DSM_JC_All_FC_BMCCOM_SeeBuyTry_Marketplace_RF_Trial-KK-03-f-05162017&cc=oa&elqcid=2997&sfcid=70114000002L1x1')
        })

        fit('Video popup should open and play (in tablet view)', function(){
            remedyforcemp.openRemedyforceProductsMP()
            remedyforcemp.openVideoPopup()
            expect(remedyforcemp.getOpenbannerYoutubeVideo().isPresent()).toBeTruthy()
        })
    })