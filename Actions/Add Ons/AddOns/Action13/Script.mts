'-----------------------------------------------------------------------demo tab------------------------------------------------------
Browser("name:=Magento Mobile Shop Demo - Magento Mobile App Builder Extension").Page("title:=Magento Mobile Shop Demo - Magento Mobile App Builder Extension").Link("innertext:=https://shopping.magentomobileshop.com/").Click
Browser("name:=Home Page").close
Browser("name:=Magento Mobile Shop Demo - Magento Mobile App Builder Extension").Page("title:=Magento Mobile Shop Demo - Magento Mobile App Builder Extension").Link("innertext:=https://shopping.magentomobileshop.com/admin/").Click
Browser("name:=Magento Admin").close

'*************GO-To-Home 
Browser("Magento Mobile Shop Demo_2").Page("Magento Mobile Shop Demo").Image("Magento Mobile Shop").Click

