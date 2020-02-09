import pprint, sys

from abc import (
    ABC, 
    abstractmethod
)

from helperFunctions import (
    clearScreen,
    presentChoice,
    presentChoiceString,
    waitForInput,
    handleDates,
    handleBool
)

class Collection(ABC):

    def __init__(self, name, workName, database):
        self.name = name
        self.workName = workName
        self.database = database

    def listAllDocuments(self):
        print("\n * Listing:")
        for item in self.database[self.workName].find({}, {"_id": 0, "__v": 0}):
            print("\n")
            pprint.pprint(item)
        waitForInput(True)

    @abstractmethod
    def insertDocument(self):
        pass

    def findDocument(self):
        print("\n* Search for key:")
        keySearchTerm = presentChoiceString().lower()
        print("* Search for value:")
        valueSearchTerm = presentChoiceString()
        document = self.database[self.workName].find_one({ keySearchTerm : valueSearchTerm })

        if document != None:
            print("\n")
            pprint.pprint(document)
        else:
            print("\nNo results found for your query...")
        waitForInput(False)
        return document

    @abstractmethod
    def modifyDocument(self):
        pass

    def removeDocument(self):
        document = self.findDocument()

        if document == None:
            return

        print("Are you sure you want to remove this document? (Y/N)")
        choice = handleBool()
        if choice:
            self.database[self.workName].find_one_and_delete({ "_id" : document["_id"] })
            print("\n* DOCUMENT REMOVED!")
        waitForInput(True)
    
    def showOptions(self):
        choice = 0
        while choice != 6:
            print("\n-- {} --\n".format(str.upper(self.name)))
            print("1. List all.")
            print("2. Find one.")
            print("3. Add item.")
            print("4. Modify an existing item.")
            print("5. Remove an item.")
            print("6. Go back to all collections.")
            print("7. Exit program.")

            choice = presentChoice()
            if choice == 1:
                self.listAllDocuments()
            elif choice == 2:
                self.findDocument()
            elif choice == 3:
                self.insertDocument()
            elif choice == 4:
                self.modifyDocument()                
            elif choice == 5:
                self.removeDocument()
            elif choice == 6:
                clearScreen()
            elif choice == 7:
                print("Exiting...")
                sys.exit()
            else:
                print("\nERROR : Invalid option.")