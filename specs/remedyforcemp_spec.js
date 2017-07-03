import pages from '../pageObjects';
import fw from '../framework';

let RemedyforcePage = require('../pageObjects/RemedyforcePage.js').RemedyforcePage
let HomePage = require('../pageObjects/HomePage.js').HomePagePage

    describe('Remedyforce Marketplace tests', function(){
        //let pages.RemedyforcePage = new RemedyforcePage()
        
        browser.ignoreSynchronization = true
        it('Remedyforce marketplace should be open and MP should contain Remedyforce products ', function() {
             
            pages.HomePage
                .expandProductsList()
                .openRemedyforceProductsMP('Remedyforce')
            expect(pages.RemedyforcePage.getRemedyforceProducts().isPresent()).toBeTruthy()
                
    })

        it('Start your free trial button should redirect to Registartion form and open in new tab', function(){
            
            pages.HomePage
                .expandProductsList()
                .openRemedyforceProductsMP('Remedyforce')
                .bannersButtonOpenPage()
            expect(browser.getCurrentUrl()).toBe('http://www.bmc.com/forms/ITSM-RF-TrialFY15-BMCCom.html?cid=oa-DSM_JC_All_FC_BMCCOM_SeeBuyTry_Marketplace_RF_Trial-KK-03-f-05162017&cc=oa&elqcid=2997&sfcid=70114000002L1x1')
        })

        it('Video popup should open and play (in tablet view)', function(){
            
            pages.HomePage
                .expandProductsList()
                .openRemedyforceProductsMP('Remedyforce')
                .openVideoPopup()
            expect(pages.RemedyforcePage.getOpenbannerYoutubeVideo().isPresent()).toBeTruthy()
        })

        fit('Contact form should be filled in and submit to partner', function(){
            pages.HomePage
                .expandProductsList()
                .openRemedyforceProductsMP('Remedyforce')
                .openFirstProductProfile()
                .filledContactForm('test', 'test', 'test@email.com', 'test', 'test', 'test')

        })

    })