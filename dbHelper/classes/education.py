from classes.collection import Collection

from classes.helpers.functions import (
    presentChoiceString,
    handleDates,
    handleBool,
    waitForInput
)

class Education(Collection):

    def __init__(self, name, workName, database):
        super().__init__(name, workName, database)
    
    def insertDocument(self):
        print("\n* ADDING A NEW EDUCATION:")
        print(" * degree:")
        degree = presentChoiceString()
        print(" * degree (Portuguese):")
        degree_pt = presentChoiceString()
        print(" * description:")
        description = presentChoiceString()
        print(" * description (Portuguese):")
        description_pt = presentChoiceString()
        print(" * school:")
        school = presentChoiceString()
        print(" * field:")
        field = presentChoiceString()
        print(" * field (Portuguese):")
        field_pt = presentChoiceString()
        print(" * from (YYYY-MM-DD):")
        dateFrom = handleDates(presentChoiceString())
        print(" * to (YYYY-MM-DD):")
        dateTo = handleDates(presentChoiceString())

        newEducation = {
            "degree" : degree,
            "degree_pt" : degree_pt,
            "description" : description,
            "description_pt" : description_pt,
            "school" : school,
            "field": field,
            "field_pt": field_pt,
            "startDate": dateFrom,
            "endDate": dateTo,
        }
        self.database[self.workName].insert_one(newEducation)
        print("\n* NEW EDUCATION ADDED!")

    def modifyDocument(self):
        document = self.findDocument()

        if document == None:
            return

        print("\n* MODIFYING AN EDUCATION:")
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