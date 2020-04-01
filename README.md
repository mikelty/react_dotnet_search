# react_dotnet_search
a search bar using react on top of .net core 3
# to run
- get Microsfot SQL Server at https://www.microsoft.com/en-us/sql-server/sql-server-downloads (or SQL Server Express, but you would need a string)
- get Micorosft SQL Server Management Studio at https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15
- get .net Core 3.1 at https://dotnet.microsoft.com/download/dotnet-core/3.1
- clone this repo
- change the Server string inside Appsettings.json (under "ConnectionStrings": "DefaultConnection":) to your server name for your own Microsoft SQL Server version and save the file. (Currently it's DESKTOP-RNLOB2T)
- open the searchbar application, go to localhost:5000
# to test
- download python3 and pip
- ```pip install -U selenium```
- install the Chrome selenium driver (or other drivers, but you'd need to change the driver code in the test script from "Chrome" to, say, "Firefox")
- ```cd search_bar_test```
- change the executable_path variable on line 13 of test.py to the location of your webdriver. (currently it is C:\Users\micha\Downloads\chromedriver_win32\chromedriver.exe)
- ```python3 test.py```
## please email me if you have any questions/concerns 
