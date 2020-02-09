import pprint, bson

from classes.collection import Collection

from classes.helpers.functions import (
    presentChoiceString,
    handleBool,
    waitForInput,
    presentChoice
)

from classes.helpers.imageUploader import (
    uploadFolderImages
)

class ImageCategory(Collection):

    def __init__(self, name, workName, database):
        super().__init__(name, workName, database)

    def insertDocument(self):
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

            print("Do the images need to be uploaded? (Y/N)")
            imageChoice = handleBool()

            if imageChoice:
                imageList.extend(uploadFolderImages())
            else:    
                newImage = {"_id" : bson.ObjectId(), "link" : "", "thumbnail" : "", "hoverComment" : "" }
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
        self.database[self.workName].insert_one(newImageCategory)
        print("\n* NEW IMAGE CATEGORY ADDED!")
        waitForInput(True)

    def modifyDocument(self):
        document = self.findDocument()

        if document == None:
            return
        
        print("\n* MODIFYING AN IMAGE CATEGORY:")
        for key in list(document.keys()):
            if (key != "_id" and key != "__v" and key != "imageList"):
                print("* Change '{}' field? (Y/N)".format(key))
                choice = handleBool()
                if choice:
                    print("* New '{}':".format(key))
                    value = presentChoiceString()

                    self.database[self.workName].find_one_and_update(
                        { "_id" : document["_id"] },
                        { '$set' : { key : value } }
                    )
            elif key == "imageList":
                newList = document[key]
                pprint.pprint(newList)
                print("\n* Change '{}'? (Y/N)".format(key))
                choice = handleBool()
                while choice:
                    print("Add a new image to this list? (Y/N)")
                    imageChoice = handleBool()
                    if imageChoice:

                        print("Do the images need to be uploaded? (Y/N)")
                        uploadImagesChoice = handleBool()

                        if uploadImagesChoice:
                            newList.extend(uploadFolderImages())
                        else:
                            newImage = { "_id" : bson.ObjectId(), "link" : "", "thumbnail" : "", "hoverComment" : "" }

                            print(" * image link:")
                            newImage["link"] = presentChoiceString()
                            print(" * image thumbnail:")
                            newImage["thumbnail"] = presentChoiceString()
                            print(" * hover comment:")
                            newImage["hoverComment"] = presentChoiceString()
                            newList.append(newImage)

                        self.database[self.workName].find_one_and_update(
                            { "_id" : document["_id"] },
                            { '$set' : { key : newList } }
                        )
                    
                    print("Remove an image from this list? (Y/N)")
                    removeImageChoice = handleBool()
                    if removeImageChoice:
                        print(" * Which index to remove? (Starts at 1)")
                        index = presentChoice()
                        newList.pop(index - 1)

                        self.database[self.workName].find_one_and_update(
                            { "_id" : document["_id"] },
                            { '$set' : { key : newList } }
                        )
                    
                    if (not imageChoice and not removeImageChoice):
                        choice = False
        print("\n* DOCUMENT UPDATED!")
        waitForInput(True)