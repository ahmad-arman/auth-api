# auth-api


## About 
 A REST Express API, has various endpoints that perform CRUD operations on a Mongo Database, using the REST standards . 
 It has two data models and two routers : clothes and food  and sign in sign up . 
<hr>

## Author
 Ahmad Arman
<hr>

## Links
* (link heroku ready to test on postman)[https://ahmad-auth-api.herokuapp.com/signup]
* (link heroku ready to test on postman)[https://ahmad-auth-api.herokuapp.com/signin]
* [Submission Pull Request](https://github.com/ahmad-arman/auth-api/pull/1)
* [Deployed App](https://ahmad-auth-api.herokuapp.com/) 
* [Error Report](https://github.com/ahmad-arman/auth-api/actions)

## Setup
1. `(.env)` file 
```
PORT=3000
MONGODB_URI =mongodb+srv://ahmad:eng.ahmad123@cluster0.kilwd.mongodb.net/test-v2
MONGOOSE_TEST_URI =mongodb+srv://ahmad:eng.ahmad123@cluster0.kilwd.mongodb.net/test-v2-npm
SECRET=99999
```
2. Install the following dependencies
```
npm init -y 
npm i cors dotenv express morgan mongoose
npm i -D jest supertest
npm i @code-fellows/supergoose 
mongod --dbpath=/Users/path/to/data/db
```
## Running the app 
1. clone the repo.
2. Enter the command `npm start`
3. Use endpoints :
   ## Food
  ### * `/api/v1/food`
<br>

- **Method** : GET 
- **CRUD Operation** : Read / Gets All Food Records
- **Response Body**   : JSON
```
[
    {
        "_id": "60a59fe36c328241b96f7237",
        "name": "burger",
        "role": "meat",
        "__v": 0
    },
    {
        "_id": "60a5a0156c328241b96f7238",
        "name": "pizza",
        "role": "chicken",
        "__v": 0
    }
]
```
<br>

- **Method** : POST 
- **CRUD Operation** : Create / Add a Record
- **Response Body**   : JSON
```
    {
        "_id": "60a5938ee109aa218e6f5a6f",
        "name": "pizza",
        "type": "chicken",
        "__v": 0
    }
```
<br>

 ### * `/api/v1/food/id`
<br>

- **Method** : GET 
- **CRUD Operation** : Read / Get One Record
- **Response Body**   : JSON
```
    {
        "_id": "60a5938ee109aa218e6f5a6f",
        "name": "pizza",
        "type": "chicken",
        "__v": 0
    }
```
<br>

- **Method** : PUT 
- **CRUD Operation** : UPDATE / Update a Record
- **Response Body**   : JSON
```
    {
        "_id": "60a5938ee109aa218e6f5a6f",
        "name": "pizza",
        "type": "chicken",
        "__v": 0
    }
``` 
<br>

- **Method** : DELETE 
- **CRUD Operation** : DELETE / Delete a Record
- **Response Body**   : JSON
```
    {
        "_id": "60a5938ee109aa218e6f5a6f",
        "name": "pizza",
        "type": "chicken",
        "__v": 0
    }
```
<br><br><br>
<hr>
<br><br>

  ## Clothes
  ### * `/api/v1/clothes`
<br>

- **Method** : GET 
- **CRUD Operation** : Read / Gets All clothes Records
- **Response Body**  : JSON
```
[
    {
        "_id": "60a5938ee109aa218e6f5a6f",
        "name": "jacket",
        "type": "kids",
        "__v": 0
    },
    {
        "_id": "60a5945ce109aa218e6f5a70",
        "name": "jacket",
        "type": "man",
        "__v": 0
    }
]
```
<br>

- **Method** : POST 
- **CRUD Operation** : Create / Add a Record
- **Response Body**   : JSON
```
{
    "name":"jacket",
    "type":"man"
}
```
<br>

 ### * `/api/v1/clothes/id`
<br>
- **Method** : GET 
- **CRUD Operation** : Read / Get One Record
- **Response Body** : JSON
```
 {
        "_id": "60a5938ee109aa218e6f5a6f",
        "name": "jacket",
        "type": "man",
        "__v": 0
    }
```
<br>

- **Method** : PUT 
- **CRUD Operation** : UPDATE / Update a Record
- **Response Body**  : JSON
```
 {
        "_id": "60a5938ee109aa218e6f5a6f",
        "name": "jacket",
        "type": "mannn",
        "__v": 0
    }
```
<br>

- **Method** : DELETE 
- **CRUD Operation** : DELETE / Delete a Record
- **Response Body**   : JSON
```
 {
     "_id": "60a5938ee109aa218e6f5a6f",
     "name": "jacket",
     "type": "mannn",
      "__v": 0
    }
```
4. Test . 
* There's 2 test files . logger.test.js and server.test.js
* In terminal run :
```
npm test
```
<br><br><br>
<hr>
<br><br>




## About 
  has various endpoints that perform sign in and sign up  and users and secret 

<hr>

## Author
 Ahmad Arman
<hr>


<hr>

## Setup
1. `(.env)` file 
```
PORT = 3000
MONGOOSE_URI = mongodb+srv://ahmad:eng.ahmad123@cluster0.kilwd.mongodb.net/test


```
2. Install the following dependencies
```
npm init -y 
npm i "@code-fellows/supergoose": "^1.1.0",
    "base-64": "^1.0.0",
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^8.6.0",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "jest": "^26.6.3",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.12.11",
    "morgan": "^1.10.0",
    "session": "^0.1.0" 



```
## Running the app 
1. clone the repo.
2. Enter the command `npm start`
3. Use endpoints :
   ## sign in 
  ### * `/signin`
<br>

- **Method** : post 
- **CRUD Operation** :  https://ahmad-bearer-auth.herokuapp.com/signin
- **Response Body**   : JSON
```
{
    "user": {
        "_id": "60ad7274327db30015ce844a",
        "username": "ahmadadmain100",
        "password": "$2b$10$NH.uC7huSLZyhEel7WMWK.Gjb2RAFlAzhm0utAoiY2hGxaY2wTDbS",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFobWFkYWRtYWluMTAwIiwiaWF0IjoxNjIxOTc5OTU1LCJleHAiOjE2MjIwNjYzNTV9.HBTK8zqaYp3djNUAevFiczt5YjfPwXT1a2CEYBlG7OA"
}
```
<br>

- **Method** : POST 
- **CRUD Operation** :https://ahmad-bearer-auth.herokuapp.com/signup
- **Response Body**   : JSON
```
   {
    "user": {
        "_id": "60ad7274327db30015ce844a",
        "username": "ahmadadmain100",
        "password": "$2b$10$NH.uC7huSLZyhEel7WMWK.Gjb2RAFlAzhm0utAoiY2hGxaY2wTDbS",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFobWFkYWRtYWluMTAwIiwiaWF0IjoxNjIxOTc5NzY1LCJleHAiOjE2MjIwNjYxNjV9.HCo4Kr0OeVMFngY4hGqisaEo64nY4-z5_IagNautoSE"
}
```
<br>
<br>

- **Method** : GET 
- **CRUD Operation** : https://ahmad-bearer-auth.herokuapp.com/users
- **Response Body**   : JSON
```
  [
    "aaaaaassssaa",
    "ahmadarman",
    "ahmdadmain",
    "ahmadadmain",
    "ahmadadmain100"
]
```
<br>


- **Method** : GET 
- **CRUD Operation** : https://ahmad-bearer-auth.herokuapp.com/secret
- **Response Body**   : text
```
Welcome to the secret area!
```
<br>


4. Test .

* There's 3 test files .basic-auth-middleware.test.js  ,,,, bearer-auth-middleware.test.js ,,,,, router.test.js
* In terminal run :

```
npm test
```
<br><br><br>
<hr>
<br><br>

## UML Diagram
![image](./lab08.png)