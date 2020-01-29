from lxml import html
from bs4 import BeautifulSoup
import requests
import json

URLS = ['https://www.thehindu.com/news/national/feeder/default.rss']


def process():
    for url in URLS:
        page = requests.get(url)
        soup = BeautifulSoup(page.content, 'xml')
        links = []
        data = {}
        news = []
        for link in soup.find_all('item'):
            news.append({"title": link.title.text,
                         "description": link.description.text, "url": link.link.text})

    data["news"] = news

    return json.dumps(data, indent=4)


if __name__ == "__main__":
    print(process())
