## After cloning repo

### 1. Install dependencies:

`$ cd gpm_express_backend`

`$ npm install`

#### To check that its running:

`$ nodemon server`

You should now see an output similar to the following:

![image of nodemon](https://cdn-images-1.medium.com/max/857/0*Mv8An6HFQJMU5b8m.png)


### 2. Install MongoDB

#### *The following instructions are for MacOS, to install MongoDB for windows, follow the tutorial [here](https://treehouse.github.io/installation-guides/windows/mongo-windows.html).* 

On MacOS this task can be completed by using the following command:

`$ brew install mongodb`

Having installed MongoDB on your system you need to create a data directory which is used by MongoDB:

`$ mkdir -p /data/db`

*Before running the next command, make sure you have read and write privileges for the directory.*

Now we’re ready to start up MongoDB by executing the following command:

`$ mongod`

This should output: 

![mongod output](https://cdn-images-1.medium.com/max/857/0*JEC4FJ-yg3rdlmDt.png)

This shows that the database is now running on port 27017 and is waiting to accept client connections.

*This instance should be kept running in its own terminal session.*

### 3. Create new MongoDB database

*Make sure you're running* `$ mongod` *in a separate terminal session.*

`$ mongo`

Once you're connected, switch to a new database *todos*:

`use todos`

Once that is done, you can exit `mongo`:

`exit`

The full tutorial can be viewed [here](https://medium.com/codingthesmartway-com-blog/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2-637f337e5d61).

### 4. Run the back-end

To start the server:

`npm start`

*Make sure you are running* `mongod` *in one session, and* `npm start` *in another.*

#### Authentication
In Postman:
##### Registration
- POST request to http://localhost:4000/api/users 
-- This will register a user with (for example):
--- 
```{
    "name": "John Doe",
    "email": "johndoe@wwu.edu",
    "password": "123456"
}
```
-- And return a token. This will be the token saved in headers for authentication.

##### Login
- POST request to http://localhost:4000/api/auth
-- This will login a user:
```{
    "email": "johndoe@wwu.edu",
    "password": "123456"
}
```
-- And return the same token as 'registration'.

##### Authentication
- GET request to http://localhost:4000/api/auth
 -  Headers: 
  - Key: x-auth-token
  - Value: <token retrieved from either of login/registration>
 - Will return the object of user:
  - ID
  - name
  - email
  - date
