import pandas as pd
import os
import json
import tweepy as tw


ACCESS_TOKEN = "########-########################################"
ACCESS_SECRET = "#############################################"
CONSUMER_KEY = "#########################"			   
CONSUMER_SECRET = "##################################################"

WOEIDS = {
    "DELHI": 20070458,
    "LUCKNOW": 2295377,
    "KANPUR": 2295378,
    "LAS_VEGAS": 2436704
}


def get_tweets(city):
    auth = tw.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_SECRET)
    api = tw.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)
    return api.trends_place(city)


def process():
    data = {}
    cities = os.listdir('Cities')
    for city in cities:
        data_city = []
        df = pd.read_csv('Cities/' + city)

        for index, row in df.iterrows():
            datum = {}
            datum["user"] = row['user']
            datum["tweet"] = row['unfiltered_text']
            datum["topic"] = str(row['topics'])
            datum["sentiment"] = str(row['sentiment'])
            datum["url"] = row['url']
            data_city.append(datum)
        data[city[:-4]] = data_city

    for key, value in WOEIDS.items():
        data["trend_" + key] = get_tweets(value)

    return json.dumps(data, indent=4)


if __name__ == "__main__":
    process()    
