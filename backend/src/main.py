import requests
from bs4 import BeautifulSoup

def getTarget(url, css):
	r = requests.get(url)
	soup = BeautifulSoup(r.content, "html5lib")
	datas = []
	for c in css:
		data = soup.select(c)
		datas.append(data)
	return datas


if __name__ == '__main__':
	datas = getTarget('https://www.yahoo.co.jp/', ['a','a'])
	print(datas)
