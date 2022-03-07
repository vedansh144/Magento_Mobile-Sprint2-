URL="https://www.magentomobileshop.com/"
SystemUtil.Run "chrome",URL
DataTable.ImportSheet "C:\Users\user\Desktop\magneto\data table\reqdemo.xls", "Sheet1", "Global"
'-----------------------------------------------------------logo button-----------------------------------------
'Browser("Free Magento Mobile App").Page("Free Magento Mobile App").Image("Magento Mobile Shop").Click

'-----------------------------------------------------------------------demo tab------------------------------------------------------
Browser("Free Magento Mobile App").Page("Free Magento Mobile App").Link("Demo").Click
'Browser("name:=Magento Mobile Shop Demo - Magento Mobile App Builder Extension").Page("title:=Magento Mobile Shop Demo - Magento Mobile App Builder Extension").Link("innertext:=https://shopping.magentomobileshop.com/").Click
'Browser("name:=Home Page").close
'Browser("name:=Magento Mobile Shop Demo - Magento Mobile App Builder Extension").Page("title:=Magento Mobile Shop Demo - Magento Mobile App Builder Extension").Link("innertext:=https://shopping.magentomobileshop.com/admin/").Click
'Browser("name:=Magento Admin").close
Browser("name:=Magento Mobile Shop Demo - Magento Mobile App Builder Extension").Page("title:=Magento Mobile Shop Demo - Magento Mobile App Builder Extension").Image("xpath:=//SECTION[1]/SECTION[1]/DIV[1]/DIV[1]/DIV[2]/DIV[2]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/SPAN[1]/DIV[1]/A[2]/IMG[1]").Click

'a=Browser("name:=Magento Mobile Shop Demo.*").Page("title:=Magento Mobile Shop Demo.*").Image("file name:=banner-brand2-black.png").Check CheckPoint("banner-brand2-black.png")
'a=Browser("Magento Mobile Shop Demo").Page("Magento Mobile Shop Demo").Image("banner-brand2-black").Check CheckPoint("banner-brand2-black_2") @@ script infofile_;_ZIP::ssf2.xml_;_

'b=Browser("name:=Magento Mobile Shop on the App Store").Page("title:=Magento Mobile Shop on the App Store").Link("name:=App Store").WebElement("innertext:=App Store").Check CheckPoint("App Store")
a=Browser("Magento Mobile Shop on").Page("Magento Mobile Shop on").Check CheckPoint("Magento Mobile Shop on the App Store") @@ script infofile_;_ZIP::ssf3.xml_;_
If a Then
   msgbox "Checkpoint Passed"
Else
   msgbox "Checkpoint Failed"
End if
