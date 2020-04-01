import unittest
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


class TestSearchBar(unittest.TestCase):

    def setUp(self) -> None:
        options = webdriver.ChromeOptions()
        options.add_argument('--ignore-ssl-errors=yes')
        options.add_argument('--ignore-certificate-errors')
        self.driver = webdriver.Chrome(options=options, executable_path=r"C:\Users\micha\Downloads\chromedriver_win32\chromedriver.exe")
        url = 'https://localhost:5001'
        self.driver.get(url)

    def tearDown(self) -> None:
        self.driver.close()

    def query(self, input):
        inputElement = self.driver.find_element_by_tag_name("input")
        inputElement.send_keys(Keys.NULL)
        inputElement.send_keys(input)
        sleep(5) # wait for artificial delay

    def enter_search_string(self, ss):
        try:
            self.query(ss)
        except:
            sleep(5)
            self.query(ss)

    def test_single_result(self):
        self.enter_search_string('fax')

    def test_two_results(self):
        self.enter_search_string('yu')

    def test_five_results(self):
        self.enter_search_string('pl')


if __name__ == '__main__':
    unittest.main()
