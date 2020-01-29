import pandas as pd
import tweepy as tw
import re
import os


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
    tweets = tw.Cursor(api.search, lang='en',
                       q='-filter:retweets').items(10)
    for tweet in tweets:
        print(tweet.id, tweet.user.screen_name)
    # return api.trends_place(WOEIDS[city])


if __name__ == "__main__":
    # print(get_tweets("DELHI"))
    df = pd.read_csv('Cities/DELHI.csv')
    print(df['url'])
