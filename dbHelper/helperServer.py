import pymongo, json, os, sys, datetime

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

def clearScreen():
    os.system('clear' if sys.platform == 'linux' else 'cls')

def presentChoice():
    chosenOption = sys.stdin.readline()
    try:
        chosenOption = int(chosenOption)
        return chosenOption
    except ValueError as err:
        print("\nERROR : {}\nPlease provide only numerical values.".format(err))
        return 0

def presentChoiceString():
    chosenOption = sys.stdin.readline()
    return chosenOption.rstrip()

def waitForInput():
    input("\n Press Enter to continue...")
    clearScreen()

def listAllCollectionItems(collectionName):
    print("\n * Listing:")
    for item in database[collectionName].find({}, {"_id": 0, "__v": 0}):
        print("\n {}".format(item))
    waitForInput()

def insertDocument(collectionName):
    if collectionName == 'experiences':
        print("\n* ADDING A NEW EXPERIENCE")
        print(" * title:")
        title = presentChoiceString()
        print(" * type:")
        experienceType = presentChoiceString()
        print(" * company:")
        company = presentChoiceString()
        print(" * comment:")
        comment = presentChoiceString()
        print(" * from (YYYY-MM-DD):")
        dateFrom = presentChoiceString()
        print(" * to (YYYY-MM-DD):")
        dateTo = presentChoiceString()
        print(" * Are you currently employed at this job? (Y/N)")
        currentlyEmployed = presentChoiceString()
        currentlyEmployed = True if currentlyEmployed.lower() == 'y' else False
        try:
            newExperience = {
                "title" : title,
                "type" : experienceType,
                "company" : company,
                "comment": comment,
                "from": datetime.datetime.fromisoformat(dateFrom),
                "to": datetime.datetime.fromisoformat(dateTo),
                "currentlyEmployed": currentlyEmployed,
            }
            database[collectionName].insert_one(newExperience)
            print("\n* NEW EXPERIENCE ADDED!")
        except Exception as err:
            print("\nERROR : {}".format(err))
    elif collectionName == 'skillcategories':
        pass
    elif collectionName == 'imagecategories':
        pass
    else:
        print("\nERROR : UNKNOWN COLLECTION NAME")
    waitForInput()

def findDocument(collectionName):
    print("\n* Search for key:")
    keySearchTerm = presentChoiceString().lower()
    print("* Search for value:")
    valueSearchTerm = presentChoiceString()
    result = database[collectionName].find_one({ keySearchTerm : valueSearchTerm }, {"_id" : 0, "__v" : 0})

    if result != None:
        print("\n")
        print(result)
    else:
        print("\nNo results found for your query...")
    waitForInput()
    return result

# START

while True:
    print("-- Portfolio DATABASE MANAGER --")
    print("\nCurrent collections in database:")
    for collection in collectionList:
        print("{} : {}".format(count, collection))
        count += 1
    count = 1
    print("\nWhat do you want to do today?\n")
    print("1. FIND/ADD/MODIFY/REMOVE Work Experiences.")
    print("2. FIND/ADD/MODIFY/REMOVE Skills Categories.")
    print("3. FIND/ADD/MODIFY/REMOVE Image Categories.")
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
                listAllCollectionItems('experiences')
            elif choice == 2:
                findDocument('experiences')
            elif choice == 3:
                insertDocument('experiences')
            elif choice == 4:
                pass
            elif choice == 5:
                pass
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
                listAllCollectionItems('skillcategories')
            elif choice == 2:
                findDocument('skillcategories')
            elif choice == 3:
                insertDocument('skillcategories')
            elif choice == 4:
                pass
            elif choice == 5:
                pass
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
                listAllCollectionItems('imagecategories')
            elif choice == 2:
                findDocument('imagecategories')
            elif choice == 3:
                insertDocument('imagecategories')
            elif choice == 4:
                pass
            elif choice == 5:
                pass
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