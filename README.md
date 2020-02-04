# Personal Portfolio Website!

Hello, this right here is my very own portfolio ready for your perusal. It also comes with a python script that makes it easier to manage my database.

Technologies used:

## Client:

* React
* SASS
* dayjs
* Github API
* [Square Loader component](https://codepen.io/tashfene/pen/raEqrJ)

## Server:

* Express.js
* MongoDB
* Mongoose
* config

### API Routes:

/api/skills -> get/post skill categories.

/api/images -> get/post image categories.

/api/experiences -> get/post work experiences.

/api/education -> get/post education.

/api/userdata -> get/post userdata.

/api/other -> get/post other.

For more control, use the python script. You can add/modify and even remove items from the entire database.

## Hosting:

* Heroku

## Python Script:

* Pymongo ```python -m pip install pymongo```
* dnspython ```python -m pip install pymongo[srv]```
* Bson (Pymongo)
* Imgur API

### Configs:

./config/default.json -> Holds the mongoDB connection string: { "dbString" } (Make sure it's fetching from 'Portfolio' instead of 'test' db, took me a while to figure out why the site wasn't displaying anything despite no errors being shown)

./config/clientID.json -> Holds the Imgur clientID: { "clientID" }

Both are required for the proper functions of the site.

A big thank you to Brad Traversy from youtube and the countless other tutorials out there, without which this project would be nowhere near what it is today.
