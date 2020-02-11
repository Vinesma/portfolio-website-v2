from classes.collection import Collection

from classes.helpers.functions import (
    presentChoiceString,
    waitForInput,
    handleBool
)

class Other(Collection):

    def __init__(self, name, workName, database):
        super().__init__(name, workName, database)
    
    def insertDocument(self):
        print("\n* ADDING A NEW 'OTHER':")
        print(" * description:")
        description = presentChoiceString()
        print(" * description (Portuguese):")
        description_pt = presentChoiceString()

        newOther = {
            "description" : description,
            "description_pt" : description_pt,
        }
        self.database[self.workName].insert_one(newOther)
        print("\n* NEW 'OTHER' ADDED!")

    def modifyDocument(self):
        document = self.findDocument()

        if document == None:
            return

        print("\n* MODIFYING AN 'OTHER':")
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