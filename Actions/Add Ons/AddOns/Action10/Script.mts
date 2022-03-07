DataTable.ImportSheet "C:\Users\vedan\Desktop\magento\magento project\Test Data\searchpay.xls", "Sheet2", "Global"

Browser("name:=Custom Magento Mobile.* ").Page("title:=Custom Magento Mobile.* ").Link("url:=https://www.magentomobileshop.com/add-ons/marketplace","name:=MarketplaceMerge your Magento.* ").WebElement("innertext:=View Add-Ons","xpath:=//DIV[2]/DIV[1]/A[1]/DIV[3]/P[1]").Click
Browser("Magento App Marketplace").Page("Magento App Marketplace").WebEdit("Enter keyword to search...").Set DataTable("search", dtGlobalSheet)
Browser("name:=Magento App Marketplace.* ").Page("title:=Magento App Marketplace.* ").WebButton("name:=search").Click

'----------------------------------------------Add to Cart----------------------------------------------
Services.StartTransaction "AddToCart"
Browser("Magento App Marketplace").Page("Magento App Marketplace").Link("Add to Cart").Click
'Browser("Magento App Marketplace").Page("Magento App Marketplace_2").WebElement("WebElement").Click
Browser("Checkout - Magento Mobile").Page("Magento App Marketplace").Link("1").Click
Services.EndTransaction "AddToCart"
Browser("Magento App Marketplace").Page("Cart - Magento Mobile").Link("Demo").Click


