import pymongo, json, os

try:
    with open(os.path.join('..', 'config', 'default.json'), "r") as readFile:
        connectionString = json.load(readFile)
except FileNotFoundError as err:
    print("Configuration file not found!")

client = pymongo.MongoClient(connectionString["dbString"])
db = client.Portfolio

print(db.skillcategories.find_one())