'Browser("Lets Start Building Awesome").Page("Lets Start Building Awesome").WebElement("V").Click
'Browser("Lets Start Building Awesome").Page("Lets Start Building Awesome").Link("Log Out").Click
      X = Browser("Free Magento Mobile App").Page("Free Magento Mobile App").WebElement("1").GetAllROProperties("innertext")
 Set re = New RegExp
         With re
            .Pattern    = "[0-9]"
            .IgnoreCase = False
            .Global     = False
         End With
        
         ' Test method returns TRUE if a match is found
         If re.Test( X ) Then
            msgbox "Cart contain the numbers between [0-9]" & X
         Else
            msgbox "Not match the regular expression" & X
         End If


