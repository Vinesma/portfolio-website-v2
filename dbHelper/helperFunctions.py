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
        return datetime.datetime.fromisoformat(value)
    except Exception as err:
        print("\nERROR : {}".format(err))
        return

def handleBool():
    choice = presentChoiceString()
    choice = True if choice == 'y' else False
    return choice