'-----------------------------------------Invoking Website------------------------------------------
URL="https://www.magentomobileshop.com/"
SystemUtil.Run "chrome",URL
DataTable.ImportSheet "C:\Users\Dheerendra Singh\Desktop\MagentoMobileApplication\TestData\searchpay.xls", "Sheet2", "Global"
'-----------------------------------------
Browser("name:=Free Magento Mobile App.* ").Page("title:=Free Magento Mobile App.* ").Link("url:=https://www.magentomobileshop.com/add-ons/","name:=Add Ons").Click
Browser("name:=Custom Magento Mobile.* ").Page("title:=Custom Magento Mobile.* ").Link("url:=https://www.magentomobileshop.com/add-ons/marketplace","name:=MarketplaceMerge your Magento.* ").WebElement("innertext:=View Add-Ons","xpath:=//DIV[2]/DIV[1]/A[1]/DIV[3]/P[1]").Click
Browser("Magento App Marketplace").Page("Magento App Marketplace").WebEdit("Enter keyword to search...").Set DataTable("search", dtGlobalSheet)
Browser("name:=Magento App Marketplace.* ").Page("title:=Magento App Marketplace.* ").WebButton("name:=search").Click

'----------------------------------------------Add to Cart----------------------------------------------
Services.StartTransaction "AddToCart"
With Browser("Magento App Marketplace")
	.Page("Magento App Marketplace").Link("Add to Cart").Click
	.Page("Magento App Marketplace_2").WebElement("WebElement").Click
End With
Browser("name:=Cart - Magento Mobile Shop").Page("title:=Cart - Magento Mobile Shop").Link("url:=https://www.magentomobileshop.com/checkout/").Click
'Browser("Magento App Marketplace").Page("Cart - Magento Mobile").WebElement("$99.00").Click DataTable("total", dtGlobalSheet)
'DataTable.ExportSheet "C:\Users\Dheerendra Singh\Desktop\Total.xls", "Global", "Sheet1"

Services.EndTransaction "AddToCart"

'-----------------------------------------------Checkout----------------------------------------------------------
a="name:=Checkout - Magento Mobile Shop"
b="title:=Checkout - Magento Mobile Shop"
Services.StartTransaction "Checkout"
Browser(a).Page(b).WebEdit("name:=billing_first_name").Set DataTable("F_name", dtGlobalSheet)
Browser(a).Page(b).WebEdit("name:=billing_first_name").WaitProperty "visible", true, 2000
Browser(a).Page(b).WebEdit("name:=billing_last_name").Set DataTable("L_name", dtGlobalSheet)
Browser(a).Page(b).WebEdit("name:=billing_last_name").WaitProperty "visible",true,3000
Browser(a).Page(b).WebEdit("name:=billing_email").Set DataTable("email", dtGlobalSheet)
Browser(a).Page(b).WebEdit("name:=billing_email").WaitProperty "visible",true,3000
Browser(a).Page(b).WebEdit("name:=billing_password").SetSecure DataTable("password", dtGlobalSheet)
Browser(a).Page(b).WebEdit("name:=billing_password").WaitProperty "visible",true,3000
Browser(a).Page(b).WebCheckBox("name:=wps_ext_cst_label").Set true
Browser(a).Page(b).WebEdit("name:=nc").WaitProperty "visible",true,5000
Browser(a).Page(b).WebEdit("name:=nc").Set DataTable("card_holder", dtGlobalSheet)
Browser(a).Page(b).WebEdit("name:=nc").WaitProperty "visible",true,3000
Browser("Checkout - Magento Mobile").Page("Checkout - Magento Mobile").WebEdit("payment[control_settings]").Set DataTable("card_number", dtGlobalSheet)
With Browser("Magento App Marketplace").Page("Checkout - Magento Mobile")
wait (5)
	.WebList("payment[msn_set]").Select DataTable("valid_month", dtGlobalSheet)
	.WebList("payment[msn_set]").WaitProperty "visible",true,3000
	.WebList("payment[yellow_set]").Select DataTable("valid_year", dtGlobalSheet)
	.WebList("payment[yellow_set]").WaitProperty "visible",true,3000
	.WebEdit("payment[savage_set]").Set DataTable("cvv", dtGlobalSheet)
End With
Browser(a).Page(b).WebCheckBox("name:=terms").Set true
Services.EndTransaction "Checkout"
'Browser("name:=Checkout - Magento Mobile Shop").Page("title:=Checkout - Magento Mobile Shop").WebButton("name:=Proceed to PayPal").Click

