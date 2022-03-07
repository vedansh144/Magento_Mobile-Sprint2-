Browser("Free Magento Mobile App").Page("Free Magento Mobile App").WebElement("V").Click
 Reporter.ReportEvent micWarning,"Report Submitted","Having warning with WebElement"
 
Browser("Free Magento Mobile App").Page("Free Magento Mobile App").Link("Log Out").Click

URL="https://www.magentomobileshop.com/"
SystemUtil.Run "chrome",URL

