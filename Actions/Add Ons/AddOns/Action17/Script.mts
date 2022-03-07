URL="https://www.magentomobileshop.com/"
SystemUtil.Run "chrome",URL

	'--------------------------------Nav Login Button------------------------------
 Browser("Free Magento Mobile App").Page("Free Magento Mobile App").Link("Log in").Click
 '--------------------------------Import Data------------------------------
DataTable.ImportSheet "C:\Users\vedan\Desktop\magento\magento project\Test Data\Main.xls", "Login", "Global"

a = "name:=Login - Magento Mobile Shop"
b = "title:=Login - Magento Mobile Shop"
'--------------UserName & Password	
Browser(a).Page(b).WebEdit("name:=username").Set DataTable("id", dtGlobalSheet)
Browser(a).Page(b).WebEdit("name:=password").Set DataTable("pass", dtGlobalSheet)
Browser(a).Page(b).WebCheckBox("name:=rememberme").Click

'***********************************************************************
'Regular Expression for email id
strid = Browser("Login - Magento Mobile").Page("Login - Magento Mobile").WebEdit("username").GetAllROProperties("value")
         Set re = New RegExp
         With re
            .Pattern    = "[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
            .IgnoreCase = False
            .Global     = False
         End With
        
         ' Test method returns TRUE if a match is found
         If re.Test( strid ) Then
            msgbox "This is a valid e-mail address " & strid
         Else
            msgbox "This is ont a valid e-mail address " & strid
         End If
'********************************************************
Browser(a).Page(b).WebButton("name:=Login").Click
Browser("Lets Start Building Awesome").Page("Lets Start Building Awesome").Image("Magento Mobile Shop").Click
