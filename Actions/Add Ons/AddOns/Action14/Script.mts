'-----------------------------------------------------checking all the tabs-----------------------------------
X = Browser("name:=Free Magento Mobile App Builder.*").Page("title:=Free Magento Mobile App Builder.*").link("innertext:=Features").GetAllROProperties("innertext")
msgbox X
Y = Browser("name:=Free Magento Mobile App Builder.*").Page("title:=Free Magento Mobile App Builder.*").link("innertext:=How It Works").GetAllROProperties("innertext")
msgbox Y
Z = Browser("name:=Free Magento Mobile App Builder.*").Page("title:=Free Magento Mobile App Builder.*").link("innertext:=Pricing").GetAllROProperties("innertext")
msgbox Z
A = Browser("Free Magento Mobile App_2").Page("Free Magento Mobile App").Link("Demo").GetAllROProperties("innertext")
msgbox A
B = Browser("name:=Free Magento Mobile App Builder.*").Page("title:=Free Magento Mobile App Builder.*").link("innertext:=Add Ons").GetAllROProperties("innertext")
msgbox B
