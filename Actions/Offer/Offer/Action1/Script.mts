URL="https://www.magentomobileshop.com/"
SystemUtil.Run "chrome",URL

Browser("name:=Free Magento Mobile App Builder - Magento 2 iOS & Android App").Page("title:= Free Magento Mobile App Builder - Magento 2 iOS & Android App").Link("name:=Offers").Click

Services.StartTransaction "offer"
'Browser("name:=Free Magento Mobile App Builder - Magento 2 iOS & Android App").Page("title:= Free Magento Mobile App Builder - Magento 2 iOS & Android App").Image("name:=Image").Click
Browser("Magento Mobile App Sale").Page("Magento Mobile App Sale").Image("offer_img_2").Click
Services.EndTransaction "offer"

X= Browser("name:=Checkout - Magento Mobile Shop").Page("title:= Checkout - Magento Mobile Shop").WebElement("innertext:=View cart â€œDeluxeâ€ has been added to your cart.").GetAllROProperties("innertext")
'Y = "View cart â€œDeluxeâ€ has been added to your cart."
'If X=Y Then
'	msgbox "CheckPoint Matched í ¼í¾‰ âœ”"
'Else
'	msgbox "CheckPoint Not Matched âŒ"
'End If

Select case X
            case "View cart â€œDeluxeâ€ has been added to your cart."
               msgbox "CheckPoint Matched  Deluxe í ¼í¾‰ âœ”"
             
            case "View cart â€œValueâ€ has been added to your cart."
               msgbox "CheckPoint Matched Value í ¼í¾‰ âœ”"
             
            case "View cart â€œUltimateâ€ has been added to your cart."
               msgbox "CheckPoint Matched  Ultimate í ¼í¾‰ âœ”"
         End select


DataTable.ImportSheet "C:\Users\vedan\Desktop\magento\magento project\Test Data\Main.xls", "offer", "Global"
'---------------------------------Biling Details--------------------
Browser("name:=Checkout - Magento Mobile Shop").Page("title:=Checkout - Magento Mobile Shop").WebEdit("name:=billing_first_name").Set DataTable("fn", dtGlobalSheet)
Browser("name:=Checkout - Magento Mobile Shop").Page("title:=Checkout - Magento Mobile Shop").WebEdit("name:=billing_last_name").Set DataTable("ln", dtGlobalSheet)
Browser("name:=Checkout - Magento Mobile Shop").Page("title:=Checkout - Magento Mobile Shop").WebEdit("name:=billing_email").Set DataTable("id", dtGlobalSheet)
Browser("name:=Checkout - Magento Mobile Shop").Page("title:=Checkout - Magento Mobile Shop").WebEdit("name:=billing_password").Set DataTable("pass", dtGlobalSheet)

'---CheckPoint
Browser("name:=Checkout - Magento Mobile Shop").Page("title:=Checkout - Magento Mobile Shop").WebCheckBox("name:=wps_ext_cst_label").Click
Browser("name:=Checkout - Magento Mobile Shop").Page("title:=Checkout - Magento Mobile Shop").WebCheckBox("name:=wps_ext_cst_label").WaitProperty "visible", true, 2000
'--------------------------------->Credit Card Details<--------------------
'-----CARDHOLDER
Browser("Checkout - Magento Mobile").Page("Checkout - Magento Mobile").WebEdit("nc").WaitProperty "visible", true, 2000
Browser("Checkout - Magento Mobile").Page("Checkout - Magento Mobile").WebEdit("nc").Set DataTable("ahn", dtGlobalSheet)

'Credit Card No
Browser("Checkout - Magento Mobile").Page("Checkout - Magento Mobile").WebEdit("payment[control_settings]").WaitProperty "visible", true, 2000
Browser("Checkout - Magento Mobile").Page("Checkout - Magento Mobile").WebEdit("payment[control_settings]").Set DataTable("cn", dtGlobalSheet)

'Mnth
Browser("Checkout - Magento Mobile").Page("Checkout - Magento Mobile").WebList("payment[msn_set]").WaitProperty "visible", true, 2000
Browser("Checkout - Magento Mobile").Page("Checkout - Magento Mobile").WebList("payment[msn_set]").Select DataTable("mnth", dtGlobalSheet)

'Year
Browser("Checkout - Magento Mobile").Page("Checkout - Magento Mobile").WebList("payment[yellow_set]").WaitProperty "visible", true, 2000
Browser("Checkout - Magento Mobile").Page("Checkout - Magento Mobile").WebList("payment[yellow_set]").Select DataTable("year", dtGlobalSheet)

'CVV
Browser("Checkout - Magento Mobile").Page("Checkout - Magento Mobile").WebEdit("payment[savage_set]").WaitProperty "visible", true, 2000
Browser("Checkout - Magento Mobile").Page("Checkout - Magento Mobile").WebEdit("payment[savage_set]").Set DataTable("cvv", dtGlobalSheet)

'---CheckPoint
Browser("name:=Checkout - Magento Mobile Shop").Page("title:=Checkout - Magento Mobile Shop").WebCheckBox("name:=terms").WaitProperty "visible", true, 2000
Browser("name:=Checkout - Magento Mobile Shop").Page("title:=Checkout - Magento Mobile Shop").WebCheckBox("name:=terms").Click

'Button
Browser("name:=Checkout - Magento Mobile Shop").Page("title:=Checkout - Magento Mobile Shop").WebButton("name:=Proceed to PayPal").Click




