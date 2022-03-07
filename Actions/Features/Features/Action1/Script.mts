URL="https://www.magentomobileshop.com/"
SystemUtil.Run "chrome",URL

''***************************
'Browser("name:=Free Magento Mobile App.* ").Page("title:=Free Magento Mobile App.* ").Link("name:=Add Ons","outertext:=Add Ons").Click
'Browser("Custom Magento Mobile_2").Page("Custom Magento Mobile").WebElement("View Add-Ons").Click
''srch
'DataTable.ImportSheet "C:\Users\vedan\Desktop\magento\magento project\Test Data\Main.xls", "PayGate", "Global"
'wait(5)
'Browser("Custom Magento Mobile_2").Page("Magento Custom Payment").WebEdit("Enter keyword to search...").Set DataTable("gpay", dtGlobalSheet)
'X = Browser("name:=Magento Custom Payment Gateways.* ").Page("title:=Magento Custom Payment Gateways.* ").WebElement("innertext:=Google Wallet").GetAllROProperties("innertext")
'msgbox "Yes it accepts GPay."
''****************************

Browser("name:=Free Magento Mobile App.* ").Page("title:=Free Magento Mobile App.* ").Link("name:=Features","outertext:=Features").Click
Browser("Free Ecommerce Magento_2").Page("Free Ecommerce Magento").Image("feature icon").Click

B = "Google Wallet"
Dim count
count = 0
Dim A(7)
         A(0) ="innertext:=Paypal"
         A(1) = "innertext:=PayU"     
         A(2) =    "innertext:=COD"   
         A(3) = "innertext:=Check or Money Order"
         A(4) =  "innertext:=Bank Transfer"
         A(5) = "innertext:=Authorize .net"
	  A(6) = "innertext:=Credit Card"
	  Length = ubound(A)
	    For i = 0 To Length-1 Step 1
	  	X= Browser("name:=Free Ecommerce Magento Mobile App Extension Features").Page("title:= Free Ecommerce Magento Mobile App Extension Features").Link(A(i)).WebElement(A(i)).GetAllROProperties("innertext")
	 	 If B = X Then
	 	 	Count = count +1
	 	 End If
	  Next
	  	If Count >0 Then
	  		msgbox"Yes, Google Pay Accept here..."
	  	Else 
	  		msgbox"No, Google Pay not Accept here..."
	  	End  If

