Browser("name:=Free Magento Mobile App.* ").Page("title:=Free Magento Mobile App.* ").Link("name:=Add Ons","outertext:=Add Ons").Click
Browser("Custom Magento Mobile").Page("Custom Magento Mobile").WebElement("View Add-Ons").Click

'Import Excel File
DataTable.ImportSheet "C:\Users\vedan\Desktop\magento\magento project\Test Data\Main.xls", "FAddO", "Global"

'Search
Browser("Magento App Custom Extension").Page("Magento App Custom Extension").WebEdit("Enter keyword to search...").Set DataTable("match", dtGlobalSheet)

X = Browser("name:=Magento App Custom Extension .* ").Page("title:=Magento App Custom Extension .* ").WebElement("innertext:=Add to Wishlist").GetAllROProperties("innertext")
msgbox X&" Yes It is here..."
Browser("Magento App Custom Extension").Page("Magento App Custom Extension").WebEdit("Enter keyword to search...").Set(" ")

Y = Browser("name:=Magento App Custom Extension .* ").Page("title:=Magento App Custom Extension .* ").WebElement("innertext:=App store optimization").GetAllROProperties("innertext")
msgbox Y&" Yes It is here..."
Browser("Magento App Custom Extension").Page("Magento App Custom Extension").WebEdit("Enter keyword to search...").Set(" ")


Z = Browser("name:=Magento App Custom Extension .* ").Page("title:=Magento App Custom Extension .* ").WebElement("innertext:=Product star rating").GetAllROProperties("innertext")
msgbox Z&" Yes It is here..."

Browser("name:=Magento App Custom Extension .* ").Page("title:=Magento App Custom Extension .*").Image("class:=shrinklayer").Click
