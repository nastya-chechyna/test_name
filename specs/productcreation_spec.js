let ProductPage = require('../pageObjects/ProductPage.js').ProductPage


describe('Creation products by MP Partners', function () {
  
    let productPage = new ProductPage()
    

        xit("Login as MP Patner, 21st Century Software Inc", function() {
            productPage.loginMPadmin(productPage.adminEmail, productPage.adminPassword)
            productPage.loginPartner()
            expect(productPage.getSideMenuTitle().getText()).toBe(productPage.PartnerAdmin, 'You are not login as MP Partner')
        })

        xit("2t2 test:Prepatation, creation and approval new product with default product type", function() {
            productPage.loginMPadmin(productPage.adminEmail, productPage.adminPassword)
            productPage.loginPartner()
            productPage.productPreparation()
            productPage.productSubmition()
            expect(productPage.getStatus().getText()).toContain(productPage.pendingStatusText, 'You are not submitted product for approval')

            productPage.loginMPadminFromPartnerProfile()
            productPage.pendingRevisionsPage()
            productPage.productApproval()
            productPage.publishedRevisionsPage()
            expect(productPage.getStatus().getText()).toContain(productPage.productName, 'Product is not approved yet')
        },150000)

        xit("Test should be deleted from MP", function() {
            productPage.loginMPadmin(productPage.adminEmail, productPage.adminPassword)
            productPage.loginPartner()
            productPage.productDelation()

        })

})