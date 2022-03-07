Services.StartTransaction "offer"

Browser("Magento Mobile App Sale").Page("Magento Mobile App Sale").Image("offer_img_2").Click
Services.EndTransaction "offer"

X= Browser("name:=Checkout - Magento Mobile Shop").Page("title:= Checkout - Magento Mobile Shop").WebElement("innertext:=View cart â€œDeluxeâ€ has been added to your cart.").GetAllROProperties("innertext")
Select case X
	case "View cart â€œDeluxeâ€ has been added to your cart."
		msgbox "CheckPoint Matched  Deluxe í ¼í¾‰ âœ”"

	case "View cart â€œValueâ€ has been added to your cart."
		msgbox "CheckPoint Matched Value í ¼í¾‰ âœ”"

	case "View cart â€œUltimateâ€ has been added to your cart."
		msgbox "CheckPoint Matched  Ultimate í ¼í¾‰ âœ”"
End select

CartDetails()
