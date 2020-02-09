import pymongo, json, os, sys, datetime, pprint

sys.path.append(os.path.abspath(os.path.join('.', 'classes')))

from classes.workExperience import WorkExperience
from classes.skillCategory import SkillCategory
from classes.imageCategory import ImageCategory

from classes.helpers.functions import (
    clearScreen,
    presentChoice,
    presentChoiceString,
    waitForInput,
    handleDates,
    handleBool
)

try:
    with open(os.path.join("..", "config", "default.json"), "r") as readFile:
        connectionString = json.load(readFile)
except FileNotFoundError as err:
    print("ERROR : {}\nConfiguration file not found!".format(err))
    sys.exit()

client = pymongo.MongoClient(connectionString["dbString"])
database = client.Portfolio
collectionList = database.list_collection_names()
count = 1

# START

while True:
    print("-- PORTFOLIO DATABASE MANAGER --")
    print("\nCurrent collections in database:")
    for collection in collectionList:
        print("{} : {}".format(count, collection))
        count += 1
    count = 1
    print("\nWhat collection you want to work with today?\n")
    print("1. Work Experiences.")
    print("2. Skills Categories.")
    print("3. Image Categories.")
    print("4. Exit program.")

    choice = presentChoice()
    if choice == 1:
        workExperience = WorkExperience('Work Experience', 'experiences', database)
        workExperience.showOptions()
    elif choice == 2:
        skillCategory = SkillCategory('Skill Categories', 'skillcategories', datetime)
        skillCategory.showOptions()
    elif choice == 3:
        imageCategory = ImageCategory('Image Categories', 'imagecategories', database)
        imageCategory.showOptions()
    elif choice == 4:
        print("Exiting...")
        sys.exit()
    else:
        print("\nERROR : Invalid option.")