﻿Services.StartTransaction "offer"

Browser("Magento Mobile App Sale").Page("Magento Mobile App Sale").Image("offer_img_2").Click
Services.EndTransaction "offer"

X= Browser("name:=Checkout - Magento Mobile Shop").Page("title:= Checkout - Magento Mobile Shop").WebElement("innertext:=View cart “Deluxe” has been added to your cart.").GetAllROProperties("innertext")
Select case X
	case "View cart “Deluxe” has been added to your cart."
		msgbox "CheckPoint Matched  Deluxe �� ✔"

	case "View cart “Value” has been added to your cart."
		msgbox "CheckPoint Matched Value �� ✔"

	case "View cart “Ultimate” has been added to your cart."
		msgbox "CheckPoint Matched  Ultimate �� ✔"
End select

CartDetails()
