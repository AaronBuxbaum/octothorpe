# from pymongo import MongoClient

# database_name = 'database'
# client = MongoClient()
# database = client[database_name]

import redis
database = redis.Redis("redis")