import pymongo, json, os, sys

from controller import Controller
from classes.helpers.functions import presentChoice

try:
    with open(os.path.join("..", "config", "default.json"), "r") as readFile:
        connectionString = json.load(readFile)
except FileNotFoundError as err:
    print("ERROR : {}\nConfiguration file not found!".format(err))
    sys.exit()

client = pymongo.MongoClient(connectionString["dbString"])
database = client.Portfolio
collectionList = database.list_collection_names()
controller = Controller(database)
count = 1

# START

while True:
    print("-- PORTFOLIO DATABASE MANAGER --")
    print("\nCurrent collections in database:")
    for collection in collectionList:
        print("{} : {}".format(count, collection))
        count += 1
    count = 1
    controller.showMenu()
    choice = presentChoice()
    controller.pickCollection(choice)