import sys

from classes.workExperience import WorkExperience
from classes.skillCategory import SkillCategory
from classes.imageCategory import ImageCategory
from classes.education import Education
from classes.other import Other

class Controller:
    collection = None

    def __init__(self, database):
        self.database = database

    def pickCollection(self, option):
        if option == 1:
            if not isinstance(self.collection, WorkExperience):
                self.collection = WorkExperience('Work Experience', 'experiences', self.database)
            self.collection.showOptions()
        elif option == 2:
            if not isinstance(self.collection, SkillCategory):
                self.collection = SkillCategory('Skill Categories', 'skillcategories', self.database)
            self.collection.showOptions()
        elif option == 3:
            if not isinstance(self.collection, ImageCategory):
                self.collection = ImageCategory('Image Categories', 'imagecategories', self.database)
            self.collection.showOptions()
        elif option == 4:
            if not isinstance(self.collection, Education):
                self.collection = Education('Education', 'educations', self.database)
            self.collection.showOptions()
        elif option == 5:
            if not isinstance(self.collection, Other):
                self.collection = Other('Other', 'others', self.database)
            self.collection.showOptions()
        elif option == 6:
            print("Exiting...")
            sys.exit()
        else:
            print("\nERROR : Invalid option.")
    
    def showMenu(self):
        print("\nWhat collection you want to work with today?\n")
        print("1. Work Experiences.")
        print("2. Skills Categories.")
        print("3. Image Categories.")
        print("4. Education.")
        print("5. Other.")
        print("6. Exit program.")





