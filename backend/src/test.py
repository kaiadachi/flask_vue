import datetime
from urllib.parse import quote

import chromedriver_binary
from selenium import webdriver


def getDriver():
    chromeOptions = webdriver.ChromeOptions()
    # chromeOptions.add_argument('--headless')
    chromeOptions.add_argument('--disable-gpu')
    chromeOptions.add_argument('--no-sandbox')
    driver = webdriver.Chrome(options=chromeOptions)
    driver.implicitly_wait(10)
    return driver


def crawl(driver):
    driver.get(url)
    title_tags = driver.find_elements_by_css_selector("h3")[:-1]
    a_tags = driver.find_elements_by_xpath("//a[h3]")
    results = []

    links = []
    titles = []
    for a_tag, title_tag in zip(a_tags, title_tags):
        links.append(a_tag.get_attribute("href"))
        titles.append(title_tag.text)

    for link, title in zip(links, titles):
        result = [title, link]
        driver.get(link)
        try:
            result.append(driver.find_element_by_css_selector("h1").text)
        except:
            result.append(None)

        results.append(result)

    print(results)
    driver.quit()


if __name__ == '__main__':
    keyword = '松の育て方'
    start = "&start=" + str(1 * 10)
    url = 'https://www.google.com/search?q=' + quote(keyword) + start
    driver = getDriver()
    crawl(driver)
