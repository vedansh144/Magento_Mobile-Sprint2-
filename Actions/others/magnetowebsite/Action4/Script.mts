'-------------------------------------------------------request demo page and paramertization---------------------------
Browser("name:=Free Magento Mobile App Builder.*").Page("title:=Free Magento Mobile App Builder.*").link("html tag:=A","innertext:=Request a Demo").Click
Browser("Free Magento Mobile App_2").Page("Free Magento Mobile App").Link("Request a Demo").Click
Browser("name:=Let's Get Started For Free !!").Page("title:=Let's Get Started For Free !!").WebEdit("placeholder:=Enter your full name").Set DataTable("full_name", dtGlobalSheet)
Browser("name:=Let's Get Started For Free !!").Page("title:=Let's Get Started For Free !!").WebEdit("placeholder:=Enter your email address").Set DataTable("email", dtGlobalSheet)
Browser("name:=Let's Get Started For Free !!").Page("title:=Let's Get Started For Free !!").WebEdit("placeholder:=Enter password").Setsecure DataTable("pass", dtGlobalSheet) 
Browser("name:=Let's Get Started For Free !!").Page("title:=Let's Get Started For Free !!").WebButton("name:=Get Started").Click


