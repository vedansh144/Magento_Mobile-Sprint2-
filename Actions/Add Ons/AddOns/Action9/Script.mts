Browser("Free Magento Mobile App").Page("Free Magento Mobile App").Link("Add Ons").Click @@ script infofile_;_ZIP::ssf26.xml_;_
Browser("Free Magento Mobile App").Page("Custom Magento Mobile").Link("MarketplaceMerge your").Click @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Free Magento Mobile App").Page("Magento App Marketplace").Link("Add to Cart_2").Click @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Free Magento Mobile App").Page("Magento App Marketplace_2").Link("1").Click @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("Free Magento Mobile App").Page("Cart - Magento Mobile").WebNumber("cart[551cb238f4895024b98d1943b").Set "2" @@ script infofile_;_ZIP::ssf30.xml_;_
Browser("Free Magento Mobile App").Page("Cart - Magento Mobile").WebButton("Update Cart").Click @@ script infofile_;_ZIP::ssf35.xml_;_

'*********************Regular Expression to check Cart numbers
Cart = Browser("Free Magento Mobile App").Page("Cart - Magento Mobile").WebElement("2").GetAllROProperties("innertext")
 Reporter.ReportEvent micWarning,"Report Submitted","Having warning with WebElement"
 Set re = New RegExp
         With re
            .Pattern    = "[0-9]"
            .IgnoreCase = False
            .Global     = False
         End With
        
         ' Test method returns TRUE if a match is found
         If re.Test( X ) Then
            Reporter.ReportEvent micPass,"Report Submit", "Passed"
            msgbox "Cart contain the numbers between [0-9]-->" & Cart
         Else
            msgbox "Not match the regular expression -->" & Cart
End If        

Browser("Free Magento Mobile App").Page("Free Magento Mobile App").Image("Magento Mobile Shop").Click

