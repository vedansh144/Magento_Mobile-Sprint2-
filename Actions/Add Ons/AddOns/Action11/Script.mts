﻿Browser("name:=Free Magento Mobile App.* ").Page("title:=Free Magento Mobile App.* ").Link("url:=https://www.magentomobileshop.com/how-it-works/","name:=How It Works").Click

'----------------------------Data for Step 1 Process----------------------------
A = Browser("name:=Create Free Ecommerce Magento Mobile App.*").Page("title:=Create Free Ecommerce Magento Mobile App.*").link("innertext:=1Enter Online Store URL").GetROProperty("innertext")
dh=Browser("name:=Create Free Ecommerce Magento Mobile App.* ").Page("title:=Create Free Ecommerce Magento Mobile App.* ").WebElement("innerhtml:=Enter the URL.* ").GetAllROProperties ("innerhtml")
msgbox "Step 1 output is:- "&A &" || " &dh

'----------------------------Data for Step 2 Process----------------------------
Browser("Create Free Ecommerce_2").Page("Create Free Ecommerce").WebElement("2").Click
B = Browser("name:=Create Free Ecommerce Magento Mobile App.*").Page("title:=Create Free Ecommerce Magento Mobile App.*").link("innertext:=2Integrate With Online Store").GetAllROProperties("innertext")
x=Browser("name:=Create Free Ecommerce Magento Mobile App.*").Page("title:=Create Free Ecommerce Magento Mobile App.*").WebElement("innerhtml:=Download Connector").GetAllROProperties ("innerhtml")
y=Browser("name:=Create Free Ecommerce Magento Mobile App.*").Page("title:=Create Free Ecommerce Magento Mobile App.*").WebElement("innerhtml:=Install the Magento app extension on your shopping website").GetAllROProperties ("innerhtml")
z=Browser("name:=Create Free Ecommerce Magento Mobile App.*").Page("title:=Create Free Ecommerce Magento Mobile App.*").WebElement("innerhtml:=Click on verification button").GetAllROProperties ("innerhtml")
p=Browser("name:=Create Free Ecommerce Magento Mobile App.*").Page("title:=Create Free Ecommerce Magento Mobile App.*").WebElement("innerhtml:=Click on verification button").GetAllROProperties ("innerhtml")
msgbox "Step 2 output is:- "&B &" || i)"&x& " ii)"&y& " iii)"&z& " iv)" &p

'----------------------------Data for Step 3 Process----------------------------
Browser("Create Free Ecommerce_2").Page("Create Free Ecommerce").WebElement("3").Click
C= Browser("name:=Create Free Ecommerce Magento Mobile App.*").Page("title:=Create Free Ecommerce Magento Mobile App.*").link("innertext:=3Automated App Building").GetAllROProperties("innertext")
x=Browser("name:=Create Free Ecommerce Magento Mobile App.*").Page("title:=Create Free Ecommerce Magento Mobile App.*").WebElement("innerhtml:=Update Logo and choose color").GetAllROProperties ("innerhtml")
y=Browser("name:=Create Free Ecommerce Magento Mobile App.*").Page("title:=Create Free Ecommerce Magento Mobile App.*").WebElement("innerhtml:=Select inbuilt theme or opt for custom theme for your shopping application").GetAllROProperties ("innerhtml")
z=Browser("name:=Create Free Ecommerce Magento Mobile App.*").Page("title:=Create Free Ecommerce Magento Mobile App.*").WebElement("innerhtml:=Select inbuilt theme or opt for custom theme for your shopping application").GetAllROProperties ("innerhtml")
msgbox "Step 3 output is:- "&C &" || i)"&x& " ii)"&y& " iii)"&z

'----------------------------Data for Step 4 Process----------------------------
Browser("Create Free Ecommerce_2").Page("Create Free Ecommerce").WebElement("4").Click
D = Browser("name:=Create Free Ecommerce Magento Mobile App.*").Page("title:=Create Free Ecommerce Magento Mobile App.*").link("innertext:=4Publish App").GetAllROProperties("innertext")
x=Browser("name:=Create Free Ecommerce Magento Mobile App.*").Page("title:=Create Free Ecommerce Magento Mobile App.*").WebElement("innerhtml:=Publish your shopping app with us").GetAllROProperties ("innerhtml")
y=Browser("name:=Create Free Ecommerce Magento Mobile App.*").Page("title:=Create Free Ecommerce Magento Mobile App.*").WebElement("innerhtml:=Or publish your application on your Google Play Store").GetAllROProperties ("innerhtml")
msgbox "Step 4 output is:- "&D &" || i) "&x& " ii) "&y
Browser("Create Free Ecommerce_2").Page("Create Free Ecommerce").Link("Add Ons").Click


