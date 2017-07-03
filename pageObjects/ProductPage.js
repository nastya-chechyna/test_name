export class ProductPage {

    constructor() {
        
        this.PartnerAdmin = 'Partner Administration'
        this.productName = 'Automated test product'
        this.pendingStatusText = 'pending'
    }
    loginPartner(){
        
        browser.sleep(5000)
        browser.driver.findElement(by.css("a[href$='/admin']")).click()
        browser.driver.findElement(by.css("a[href='/admin/companies']")).click()
        browser.sleep(2000)
        browser.driver.findElement(by.css("div[data-id='1']")).click()
        browser.sleep(3000)
        browser.driver.findElement(by.css("div[id=':4']")).click()
        browser.sleep(3000)
    }
    
    getSideMenuTitle(){
        browser.ignoreSynchronization = true
        browser.sleep(2000)
        return $("div[class='mp_admin_sidemenu_title']")
    }
    

    productPreparation(){
        browser.ignoreSynchronization = true
        browser.driver.findElement(by.css(".mp_admin_sidemenu_content .mp_admin_menu_item:last-child .mp_admin_menu_item_arrow")).click()
        browser.sleep(3000)
        
        browser.driver.findElement(by.css(".mp_admin_sidemenu_content .mp_admin_menu_item:last-child .mp_admin_menu_item_content .mp_admin_submenu_item[data-cid='newProduct']")).click()
        browser.sleep(3000)
        browser.driver.findElement(by.css('.mp_admin_text_field_input')).sendKeys('Automated test product')
        browser.driver.findElement(by.css("input[name='product_version[name]']")).sendKeys('1.1')
        browser.driver.findElement(by.css(".mp_button_action")).click()
        browser.sleep(3000)
        browser.driver.switchTo().frame(":ta-41")
        browser.driver.findElement(by.css('.editable ')).sendKeys('Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua')  
        browser.driver.switchTo().defaultContent()
        browser.driver.findElement(by.css('.mp_admin_text_field_input')).sendKeys('https://www.google.com/')
        browser.driver.findElement(by.css(" .mp_admin_logo_field_content_container_default_image ")).click()
        browser.driver.findElement(by.css(".mp_admin_logo_field input[data-cid='clone_logo']")).click()
        browser.driver.findElement(by.css('.mp_main_layout_footer_content .mp_button')).click()
        browser.sleep(3000)
     }

     productSubmition(){
        browser.ignoreSynchronization = true
        browser.driver.findElement(by.css('.mp_admin_table_cell .mp_admin_manage')).click()
        browser.sleep(1000)         
        browser.driver.findElement(by.css("div[id=':8']")).click()
        browser.sleep(1000)  
     }

     getStatus(){
         browser.ignoreSynchronization = true
         browser.sleep(2000)
         return element(by.xpath("//div[@class='mp_admin_table_row'][2]"))
     }

     loginMPadminFromPartnerProfile(){
         browser.ignoreSynchronization = true
         browser.driver.findElement(by.css("a[href='/su_logout']")).click()
         browser.sleep(2000)
        
     }

     pendingRevisionsPage(){
         browser.ignoreSynchronization = true
         browser.driver.findElement(by.css(".mp_admin_sidemenu_content .mp_admin_menu_item:last-child .mp_admin_menu_item_arrow")).click()
         browser.driver.findElement(by.css("a[href='/admin/pending_revisions']")).click()
         browser.sleep(1000)  
     }
     
     productApproval(){
        browser.ignoreSynchronization = true
        browser.driver.findElement(by.css('.mp_admin_manage')).click()
        browser.sleep(1000)         
        browser.driver.findElement(by.css("div[id=':3']")).click()
        browser.sleep(1000) 
     
    }

    publishedRevisionsPage(){
        browser.ignoreSynchronization = true
        browser.driver.findElement(by.css("a[href='/admin/published_revisions']")).click()
        browser.sleep(2000)
    }

    productDelation(){
        browser.ignoreSynchronization = true
        browser.driver.findElement(by.css(".mp_admin_sidemenu_content .mp_admin_menu_item:last-child .mp_admin_menu_item_arrow")).click()
        browser.sleep(3000)
        browser.driver.findElement(by.css("a[href='/admin/products']")).click()
        browser.driver.findElement(by.css(".mp_admin_manage")).click() 
        browser.driver.findElement(by.css("div[id=':4']")).click()
        browser.sleep(1000)
        browser.driver.findElement(by.css(".mp-dialog-buttons .mp_button_action")).click()
        browser.sleep(1000)

    }
}

module.exports.ProductPage = ProductPage    

