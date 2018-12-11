import requests
from bs4 import BeautifulSoup

def getTarget(url, css):
	r = requests.get(url)
	soup = BeautifulSoup(r.content, "html.parser")
	data = soup.select(css)
	return data


if __name__ == '__main__':
	data = getTarget('https://news.yahoo.co.jp/', 'a')
	print(data)
