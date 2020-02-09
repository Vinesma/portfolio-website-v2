from classes.collection import Collection

from classes.helpers.functions import (
    presentChoiceString,
    handleDates,
    handleBool,
    waitForInput
)

class WorkExperience(Collection):

    def __init__(self, name, workName, database):
        super().__init__(name, workName, database)
    
    def insertDocument(self):
        print("\n* ADDING A NEW EXPERIENCE:")
        print(" * title:")
        title = presentChoiceString()
        print(" * title (Portuguese):")
        title_pt = presentChoiceString()
        print(" * type:")
        experienceType = presentChoiceString()
        print(" * type (Portuguese):")
        experienceType_pt = presentChoiceString()
        print(" * company:")
        company = presentChoiceString()
        print(" * comment:")
        comment = presentChoiceString()
        print(" * comment (Portuguese):")
        comment_pt = presentChoiceString()
        print(" * from (YYYY-MM-DD):")
        dateFrom = handleDates(presentChoiceString())
        print(" * to (YYYY-MM-DD):")
        dateTo = handleDates(presentChoiceString())
        print(" * Are you currently employed at this job? (Y/N)")
        currentlyEmployed = handleBool()

        newExperience = {
            "title" : title,
            "title_pt" : title_pt,
            "type" : experienceType,
            "type_pt" : experienceType_pt,
            "company" : company,
            "comment": comment,
            "comment_pt": comment_pt,
            "from": dateFrom,
            "to": dateTo,
            "currentlyEmployed": currentlyEmployed,
        }
        self.database[self.workName].insert_one(newExperience)
        print("\n* NEW EXPERIENCE ADDED!")

    def modifyDocument(self):
        document = self.findDocument()

        if document == None:
            return

        print("\n* MODIFYING AN EXPERIENCE:")
        for key in list(document.keys()):
            if (key != "_id" and key != "__v"):
                print("* Change '{}' field? (Y/N)".format(key))
                choice = handleBool()
                if choice:
                    print("* New '{}':".format(key))
                    value = presentChoiceString()

                    self.database[self.workName].find_one_and_update(
                        { "_id" : document["_id"] },
                        { '$set' : { key : value } }
                    )
        print("\n* DOCUMENT UPDATED!")
        waitForInput(True)