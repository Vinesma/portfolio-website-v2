import os, sys, datetime, pprint

from helperFunctions import (
    clearScreen,
    presentChoice,
    presentChoiceString,
    waitForInput,
    handleDates,
    handleBool
)

def listAllDocuments(database, collectionName):
    print("\n * Listing:")
    for item in database[collectionName].find({}, {"_id": 0, "__v": 0}):
        print("\n")
        pprint.pprint(item)
    waitForInput(True)

def insertDocument(database, collectionName):
    if collectionName == 'experiences':
        print("\n* ADDING A NEW EXPERIENCE:")
        print(" * title:")
        title = presentChoiceString()
        print(" * type:")
        experienceType = presentChoiceString()
        print(" * company:")
        company = presentChoiceString()
        print(" * comment:")
        comment = presentChoiceString()
        print(" * from (YYYY-MM-DD):")
        dateFrom = handleDates(presentChoiceString())
        print(" * to (YYYY-MM-DD):")
        dateTo = handleDates(presentChoiceString())
        print(" * Are you currently employed at this job? (Y/N)")
        currentlyEmployed = handleBool()

        newExperience = {
            "title" : title,
            "type" : experienceType,
            "company" : company,
            "comment": comment,
            "from": dateFrom,
            "to": dateTo,
            "currentlyEmployed": currentlyEmployed,
        }
        database[collectionName].insert_one(newExperience)
        print("\n* NEW EXPERIENCE ADDED!")
    elif collectionName == 'skillcategories':
        skillList = []

        print("\n* ADDING A NEW SKILL CATEGORY:")
        print(" * name:")
        name = presentChoiceString()
        print(" * icon:")
        icon = presentChoiceString()
        print(" * Add skills? (Y/N)")
        choice = handleBool()
        while choice:
            newSkill = { "name" : "", "proficiency" : 0, "icon" : ""}

            print(" * skill name:")
            newSkill["name"] = presentChoiceString()
            print(" * skill proficiency (1 to 3):")
            newSkill["proficiency"] = presentChoice()
            print(" * skill icon:")
            newSkill["icon"] = presentChoiceString()

            skillList.append(newSkill)
            print(" * Add another skill? (Y/N)")
            choice = handleBool()
        
        newSkillCategory = {
            "name" : name,
            "icon" : icon,
            "skillList" : skillList
        }
        database[collectionName].insert_one(newSkillCategory)
        print("\n* NEW SKILL CATEGORY ADDED!")
    elif collectionName == 'imagecategories':
        imageList = []

        print("\n* ADDING A NEW IMAGE CATEGORY:")
        print(" * name:")
        name = presentChoiceString()
        print(" * icon:")
        icon = presentChoiceString()
        print(" * shorthand (first two letters):")
        shorthand = presentChoiceString()
        print(" * Add images? (Y/N)")
        choice = handleBool()
        while choice:
            newImage = { "link" : "", "thumbnail" : "", "hoverComment" : "" }

            print("Does the image need to be uploaded? (Y/N)")
            imageChoice = handleBool

            if imageChoice:
                pass
            else:    
                print(" * image link:")
                newImage["link"] = presentChoiceString()
                print(" * image thumbnail:")
                newImage["thumbnail"] = presentChoiceString()
                print(" * hover comment:")
                newImage["hoverComment"] = presentChoiceString()

            imageList.append(newImage)
            print(" * Add another image? (Y/N)")
            choice = handleBool()
        
        newImageCategory = {
            "name" : name,
            "icon" : icon,
            "shorthand" : shorthand,
            "imageList" : imageList
        }
        database[collectionName].insert_one(newImageCategory)
        print("\n* NEW IMAGE CATEGORY ADDED!")
    else:
        print("\nERROR : UNKNOWN COLLECTION NAME")
    waitForInput(True)

def findDocument(database, collectionName):
    print("\n* Search for key:")
    keySearchTerm = presentChoiceString().lower()
    print("* Search for value:")
    valueSearchTerm = presentChoiceString()
    document = database[collectionName].find_one({ keySearchTerm : valueSearchTerm })

    if document != None:
        print("\n")
        pprint.pprint(document)
    else:
        print("\nNo results found for your query...")
    waitForInput(False)
    return document

def modifyDocument(database, collectionName):
    document = findDocument(database, collectionName)

    if document == None:
        return

    if collectionName == 'experiences':
        print("\n* MODIFYING AN EXPERIENCE:")
        for key in list(document.keys()):
            if (key != "_id" and key != "__v"):
                print("* Change '{}' field? (Y/N)".format(key))
                choice = handleBool()
                if choice:
                    print("* New '{}':".format(key))
                    value = presentChoiceString()
                    database[collectionName].find_one_and_update(
                        { "_id" : document["_id"] },
                        { '$set' : { key : value } }
                    )
    print("\n* DOCUMENT UPDATED!")
    waitForInput(True)

def removeDocument(database, collectionName):
    document = findDocument(database, collectionName)

    if document == None:
        return

    print("Are you sure you want to remove this document? (Y/N)")
    choice = handleBool()
    if choice:
        database[collectionName].find_one_and_delete({ "_id" : document["_id"] })
        print("\n* DOCUMENT REMOVED!")
    waitForInput(True)