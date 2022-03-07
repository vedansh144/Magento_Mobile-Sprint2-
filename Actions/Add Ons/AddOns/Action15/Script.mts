'-------------------------------------------------------request demo page and paramertization---------------------------
Browser("Free Magento Mobile App_2").Page("Free Magento Mobile App").Link("Request a Demo").Click

DataTable.ImportSheet "C:\Users\vedan\Desktop\magento\magento project\Test Data\Main.xls", "Demo", "Global"

Browser("name:=Let's Get Started For Free !!").Page("title:=Let's Get Started For Free !!").WebEdit("placeholder:=Enter your full name").WaitProperty "visible", true, 3000
Browser("name:=Let's Get Started For Free !!").Page("title:=Let's Get Started For Free !!").WebEdit("placeholder:=Enter your full name").Set DataTable("full_name", dtGlobalSheet)

Browser("name:=Let's Get Started For Free !!").Page("title:=Let's Get Started For Free !!").WebEdit("name:=email").WaitProperty "visible", true, 5000 @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("name:=Let's Get Started For Free !!").Page("title:=Let's Get Started For Free !!").WebEdit("name:=email").Set DataTable("email", dtGlobalSheet)

Browser("name:=Let's Get Started For Free !!").Page("title:=Let's Get Started For Free !!").WebEdit("name:=password").WaitProperty "visible", true, 3000
Browser("name:=Let's Get Started For Free !!").Page("title:=Let's Get Started For Free !!").WebEdit("name:=password").Setsecure DataTable("pass", dtGlobalSheet) 

Browser("name:=Let's Get Started For Free !!").Page("title:=Let's Get Started For Free !!").WebButton("name:=Get Started").Click

Browser("Lets Start Building Awesome").Page("Lets Start Building Awesome").Image("Magento Mobile Shop").Click
