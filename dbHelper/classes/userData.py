from classes.collection import Collection

from classes.helpers.functions import (
    presentChoiceString,
    waitForInput,
    handleBool,
    handleYear
)

class UserData(Collection):

    def __init__(self, name, workName, database):
        super().__init__(name, workName, database)
    
    def insertDocument(self):
        print("\n* ADDING NEW USER DATA:")
        print(" * name:")
        name = presentChoiceString()
        print(" * nationality:")
        nationality = presentChoiceString()
        print(" * nationality (Portuguese):")
        nationality_pt = presentChoiceString()
        print(" * marital status:")
        maritalStatus = presentChoiceString()
        print(" * marital status (Portuguese):")
        maritalStatus_pt = presentChoiceString()
        print(" * year of birth:")
        yearOfBirth = handleYear()
        print(" * address:")
        address = presentChoiceString()
        print(" * city:")
        city = presentChoiceString()
        print(" * state:")
        state = presentChoiceString()
        print(" * home phone:")
        homePhone = presentChoiceString()
        print(" * cell phone:")
        cellPhone = presentChoiceString()
        print(" * email:")
        email = presentChoiceString()
        print(" * website:")
        website = presentChoiceString()

        newUserData = {
            "name" : name,
            "nationality" : nationality,
            "nationality_pt" : nationality_pt,
            "maritalStatus" : maritalStatus,
            "maritalStatus_pt" : maritalStatus_pt,
            "yearOfBirth" : yearOfBirth,
            "address" : address,
            "city" : city,
            "state" : state,
            "homePhone" : homePhone,
            "cellPhone" : cellPhone,
            "email" : email,
            "website" : website,
        }
        self.database[self.workName].insert_one(newUserData)
        print("\n* NEW USER DATA ADDED!")

    def modifyDocument(self):
        document = self.findDocument()

        if document == None:
            return

        print("\n* MODIFYING USER DATA:")
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