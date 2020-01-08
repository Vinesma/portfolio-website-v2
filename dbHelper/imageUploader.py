import requests, re, os, json, shutil, base64, bson

from helperFunctions import (
    presentChoiceString
)

namePattern = re.compile(r'([a-zA-Z0-9_ ]+)(\.png|\.jpeg|\.jpg|\.gif)')

link = "https://i.imgur.com/"
thumbnailSize = "m"
directory = os.path.join(".")

try:
    with open(os.path.join("..", "config", "clientID.json"), "r") as readFile:
        clientId = json.load(readFile)
        clientId = clientId["clientID"]
except FileNotFoundError as err:
    print("Config file not found, make sure a file called 'clientID' is in ../config/")
    print("Access https://imgur.com/account/settings/apps to get a valid clientID for this app")

def uploadFolderImages():
    imageList = []

    print("\nScanning '{}'".format(directory))
    for filename in os.listdir(directory):
        mo = namePattern.search(filename)

        if mo == None:
            continue

        with open(os.path.join(directory, filename), 'rb') as f:
            data = f.read()
            encodedData = base64.b64encode(data)
            f.close()
        
        extension = mo.group(2)
        
        url = 'https://api.imgur.com/3/image'
        payload = {'image': encodedData}
        files = {}
        headers = {
        'Authorization': 'Client-ID ' + clientId
        }

        response = requests.request(
            'POST',
            url,
            headers = headers,
            data = payload,
            files = files,
            allow_redirects=False
        )

        jsonObj = json.loads(response.text)
        if jsonObj['status'] == 200:
            imageHash = jsonObj['data']['id']

            print("* Creating new image object...")
            newImage = { "_id" : bson.ObjectId(), "link" : "", "thumbnail" : "", "hoverComment" : "" }

            newImage["link"] = "{}{}{}".format(link, imageHash, extension)
            newImage["thumbnail"] = "{}{}{}{}".format(link,imageHash, thumbnailSize, extension)
            print("* hover comment for '{}':".format(filename))
            newImage["hoverComment"] = presentChoiceString()

            imageList.append(newImage)
            os.unlink(os.path.join(directory, filename))
        else:
            print('Failed to upload {}'.format(filename))
    print("* Finished uploading images!")
    return imageList