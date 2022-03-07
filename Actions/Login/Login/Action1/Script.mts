URL="https://www.magentomobileshop.com/"
SystemUtil.Run "chrome",URL

	'--------------------------------Nav Login Button------------------------------
 Browser("Free Magento Mobile App").Page("Free Magento Mobile App").Link("Log in").Click
 '--------------------------------Import Data------------------------------
DataTable.ImportSheet "C:\Users\vedan\Desktop\magento\magento project\Test Data\Main.xls", "Login", "Global"

'--------------UserName & Password	
Browser("name:=Login - Magento Mobile Shop").Page("title:=Login - Magento Mobile Shop").WebEdit("name:=username").Set DataTable("id", dtGlobalSheet)
Browser("name:=Login - Magento Mobile Shop").Page("title:=Login - Magento Mobile Shop").WebEdit("name:=password").Set DataTable("pass", dtGlobalSheet)
Browser("name:=Login - Magento Mobile Shop").Page("title:=Login - Magento Mobile Shop").WebCheckBox("name:=rememberme").Click
Browser("name:=Login - Magento Mobile Shop").Page("title:=Login - Magento Mobile Shop").WebButton("name:=Login").Click
Browser("Free Magento Mobile App").Page("Lets Start Building Awesome").Image("Magento Mobile Shop").Click



