import os, sys, datetime

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

def waitForInput(clear):
    input("\nPress Enter to continue...")
    if clear:
        clearScreen()

def handleDates(value):
    try:
        dateString = value.split('-')
        return datetime.datetime(
            int(dateString[0]),
            int(dateString[1]),
            int(dateString[2])).isoformat()
    except Exception as err:
        print("\nERROR : {}".format(err))
        return

def handleBool():
    choice = presentChoiceString()
    choice = True if choice == 'y' else False
    return choice

def handleYear():
    year = presentChoice()
    if year > 9999 or year < 1900:
        print("\nERROR : This year is not supported (Number too large or too small)")
        year = 1997
    return year