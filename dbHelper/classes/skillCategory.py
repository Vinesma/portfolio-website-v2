import pprint, bson

from classes.collection import Collection

from classes.helpers.functions import (
    presentChoiceString,
    presentChoice,
    handleBool,
    waitForInput
)

class SkillCategory(Collection):

    def __init__(self, name, workName, database):
        super().__init__(name, workName, database)

    def insertDocument(self):
        skillList = []

        print("\n* ADDING A NEW SKILL CATEGORY:")
        print(" * name:")
        name = presentChoiceString()
        print(" * icon:")
        icon = presentChoiceString()
        print(" * Add skills? (Y/N)")
        choice = handleBool()
        while choice:
            newSkill = {"_id" : bson.ObjectId(), "name" : "", "proficiency" : 0, "icon" : ""}

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
        self.database[self.workName].insert_one(newSkillCategory)
        print("\n* NEW SKILL CATEGORY ADDED!")

    def modifyDocument(self):
        document = self.findDocument()

        if document == None:
            return

        print("\n* MODIFYING A SKILL CATEGORY:")
        for key in list(document.keys()):
            if (key != "_id" and key != "__v" and key != "skillList"):
                print("* Change '{}' field? (Y/N)".format(key))
                choice = handleBool()
                if choice:
                    print("* New '{}':".format(key))
                    value = presentChoiceString()

                    self.database[self.workName].find_one_and_update(
                        { "_id" : document["_id"] },
                        { '$set' : { key : value } }
                    )
            elif key == "skillList":
                newList = document[key]
                pprint.pprint(newList)
                print("\n* Change '{}'? (Y/N)".format(key))
                choice = handleBool()
                while choice:
                    print("Add a new skill to this list? (Y/N)")
                    newSkillChoice = handleBool()
                    if newSkillChoice:
                        newSkill = { "_id" : bson.ObjectId(), "name" : "", "proficiency" : 0, "icon" : ""}

                        print(" * skill name:")
                        newSkill["name"] = presentChoiceString()
                        print(" * skill proficiency (1 to 3):")
                        newSkill["proficiency"] = presentChoice()
                        print(" * skill icon:")
                        newSkill["icon"] = presentChoiceString()
                        newList.append(newSkill)

                        self.database[self.workName].find_one_and_update(
                            { "_id" : document["_id"] },
                            { '$set' : { key : newList } }
                        )
                    
                    print("Modify this list? (Y/N)")
                    modifySkillChoice = handleBool()
                    if modifySkillChoice:
                        newSkill = { "_id" : "", "name" : "", "proficiency" : 0, "icon" : ""}
                        print(" * Which index to modify? (Starts at 1)")
                        index = presentChoice()

                        newSkill["_id"] = newList[index - 1]["_id"]
                        print(" * skill name:")
                        newSkill["name"] = presentChoiceString()
                        print(" * skill proficiency (1 to 3):")
                        newSkill["proficiency"] = presentChoice()
                        print(" * skill icon:")
                        newSkill["icon"] = presentChoiceString()
                        newList[index - 1] = newSkill

                        self.database[self.workName].find_one_and_update(
                            { "_id" : document["_id"] },
                            { '$set' : { key : newList } }
                        )
                    
                    print("Remove a skill from this list? (Y/N)")
                    removeSkillChoice = handleBool()
                    if removeSkillChoice:
                        print(" * Which index to remove? (Starts at 1)")
                        index = presentChoice()
                        newList.pop(index - 1)

                        self.database[self.workName].find_one_and_update(
                            { "_id" : document["_id"] },
                            { '$set' : { key : newList } }
                        )
                    
                    if (not newSkillChoice and not removeSkillChoice):
                        choice = False
        print("\n* DOCUMENT UPDATED!")
        waitForInput(True)