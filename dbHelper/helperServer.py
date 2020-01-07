import pymongo, json, os, sys, datetime, pprint

from collectionHandlers import (
    listAllDocuments,
    insertDocument,
    findDocument,
    modifyDocument,
    removeDocument
)

from helperFunctions import (
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
        while choice != 6:
            print("\n-- WORK EXPERIENCE --\n")
            print("1. List all experiences.")
            print("2. Find an experience.")
            print("3. Add a new experience.")
            print("4. Modify an existing experience.")
            print("5. Remove an experience.")
            print("6. Go back to all collections.")
            print("7. Exit program.")

            choice = presentChoice()
            if choice == 1:
                listAllDocuments(database, 'experiences')
            elif choice == 2:
                findDocument(database, 'experiences')
            elif choice == 3:
                insertDocument(database, 'experiences')
            elif choice == 4:
                modifyDocument(database, 'experiences')                
            elif choice == 5:
                removeDocument(database, 'experiences')
            elif choice == 6:
                clearScreen()
            elif choice == 7:
                print("Exiting...")
                sys.exit()
            else:
                print("\nERROR : Invalid option.")
    elif choice == 2:
        while choice != 6:
            print("\n-- SKILL CATEGORIES --\n")
            print("1. List all skill categories.")
            print("2. Find a skill category.")
            print("3. Add a new skill category.")
            print("4. Modify an existing skill category.")
            print("5. Remove a skill category.")
            print("6. Go back to all collections.")
            print("7. Exit program.")

            choice = presentChoice()
            if choice == 1:
                listAllDocuments(database, 'skillcategories')
            elif choice == 2:
                findDocument(database, 'skillcategories')
            elif choice == 3:
                insertDocument(database, 'skillcategories')
            elif choice == 4:
                modifyDocument(database, 'skillcategories')
            elif choice == 5:
                removeDocument(database, 'skillcategories')
            elif choice == 6:
                clearScreen()
            elif choice == 7:
                print("Exiting...")
                sys.exit()
            else:
                print("\nERROR : Invalid option.")
    elif choice == 3:
        while choice != 6:
            print("\n-- IMAGE CATEGORIES --\n")
            print("1. List all image categories.")
            print("2. Find an image category.")
            print("3. Add a new image category.")
            print("4. Modify an existing image category.")
            print("5. Remove an image category.")
            print("6. Go back to all collections.")
            print("7. Exit program.")

            choice = presentChoice()
            if choice == 1:
                listAllDocuments(database, 'imagecategories')
            elif choice == 2:
                findDocument(database, 'imagecategories')
            elif choice == 3:
                insertDocument(database, 'imagecategories')
            elif choice == 4:
                modifyDocument(database, 'imagecategories')
            elif choice == 5:
                removeDocument(database, 'imagecategories')
            elif choice == 6:
                clearScreen()
            elif choice == 7:
                print("Exiting...")
                sys.exit()
            else:
                print("\nERROR : Invalid option.")
    elif choice == 4:
        print("Exiting...")
        sys.exit()
    else:
        print("\nERROR : Invalid option.")