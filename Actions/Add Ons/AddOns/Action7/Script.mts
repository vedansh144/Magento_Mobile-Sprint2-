Browser("name:=Free Magento Mobile App.* ").Page("title:=Free Magento Mobile App.* ").Link("name:=Features","outertext:=Features").Click
Browser("Free Ecommerce Magento_2").Page("Free Ecommerce Magento").Image("feature icon").Click
'********************************Google Pay
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
'Browser("Custom Magento Mobile_2").Page("Free Magento Mobile App").WebElement("WebElement").Click
Browser("name:=Free Ecommerce Magento Mobile App Extension Features").Page("title:= Free Ecommerce Magento Mobile App Extension Features").Link("name:=Offers").Click
