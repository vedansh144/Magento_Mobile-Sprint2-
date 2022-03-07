URL="https://www.magentomobileshop.com/"
SystemUtil.Run "chrome",URL


Browser("name:=Free Magento Mobile App.* ").Page("title:=Free Magento Mobile App.* ").Link("name:=Add Ons","outertext:=Add Ons").Click
Browser("Custom Magento Mobile").Page("Custom Magento Mobile").WebElement("View Add-Ons").Click

'Import Excel File
DataTable.ImportSheet "C:\Users\vedan\Desktop\magento\magento project\Test Data\Main.xls", "FAddO", "Global"

'Search
Browser("Magento App Custom Extension").Page("Magento App Custom Extension").WebEdit("Enter keyword to search...").Set DataTable("match", dtGlobalSheet)
wait(5)
X = Browser("name:=Magento App Custom Extension .* ").Page("title:=Magento App Custom Extension .* ").WebElement("innertext:=Add to Wishlist").GetAllROProperties("innertext")
msgbox X&" Yes It is here..."
Browser("Magento App Custom Extension").Page("Magento App Custom Extension").WebEdit("Enter keyword to search...").Set(" ")
wait(5)
Y = Browser("name:=Magento App Custom Extension .* ").Page("title:=Magento App Custom Extension .* ").WebElement("innertext:=App store optimization").GetAllROProperties("innertext")
wait(5)
msgbox Y&" Yes It is here..."

Browser("Magento App Custom Extension").Page("Magento App Custom Extension").WebEdit("Enter keyword to search...").Set(" ")
wait(5)

Z = Browser("name:=Magento App Custom Extension .* ").Page("title:=Magento App Custom Extension .* ").WebElement("innertext:=Product star rating").GetAllROProperties("innertext")
wait(5)
msgbox Z&" Yes It is here..."


'DataTable.ImportSheet "C:\Users\vedan\Desktop\magento\magento project\Test Data\Main.xls", "FAddO", "Global"
'Dim objExcel,objWorkbook,objSheet
'Set objExcel = CreateObject("Excel.Application")
'     Set objWorkbook = objExcel.Workbooks.Open("C:\Users\vedan\Desktop\magento\magento project\Test Data\Main.xls")
'     Set objSheet = objWorkbook.Worksheets("FAddO")
'     columncount = objSheet.UsedRange.Columns.Count
'     RowCount = objSheet.UsedRange.Rows.Count
'     For i = 1 To RowCount 
'         For j = 1 To columncount
'             strValue = objSheet.Cells(i,j)
'             MsgBox strValue 'Displaying cell values
'        Next
'    Next
'    Set objSheet  = Nothing
'    Set objWorkbook = Nothing
'    Set objExcel = Nothing
