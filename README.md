## After cloning repo

### 1. Install dependencies:

`$ cd gpm_express_backend`

`$ npm install`

#### To check that its running:

`$ nodemon server`

You should now see an output similar to the following:

![image of nodemon](https://cdn-images-1.medium.com/max/857/0*Mv8An6HFQJMU5b8m.png)

### 2. Install MongoDB

#### _The following instructions are for MacOS, to install MongoDB for windows, follow the tutorial [here](https://treehouse.github.io/installation-guides/windows/mongo-windows.html)._

On MacOS this task can be completed by using the following command:

`$ brew install mongodb`

Having installed MongoDB on your system you need to create a data directory which is used by MongoDB:

`$ mkdir -p /data/db`

_Before running the next command, make sure you have read and write privileges for the directory._

Now we’re ready to start up MongoDB by executing the following command:

`$ mongod`

This should output:

![mongod output](https://cdn-images-1.medium.com/max/857/0*JEC4FJ-yg3rdlmDt.png)

This shows that the database is now running on port 27017 and is waiting to accept client connections.

_This instance should be kept running in its own terminal session._

### 3. Create new MongoDB database

_Make sure you're running_ `$ mongod` _in a separate terminal session._

`$ mongo`

Once you're connected, switch to a new database _todos_:

`use todos`

Once that is done, you can exit `mongo`:

`exit`

The full tutorial can be viewed [here](https://medium.com/codingthesmartway-com-blog/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2-637f337e5d61).

### 4. Run app

Bellow are the scripts for app (back-end):

```
    "client-install": "npm install --prefix client",
    "build": "concurrently \"cd client && npm run build\" \"npm build \"",
    "test": "echo \"Error: no test specified\" && exit 1",
    "client": "cd ./client && npm start ",
    "server-prod": "node server.js",
    "server": "nodemon server.js",
    "start": "node server.js",
    "start:dev": "concurrently --kill-others  \"npm run client\" \"npm run server\"",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
```

To start the server locally:

`npm run start:dev`

_Make sure you are running_ `mongod` _in one session, and_ `npm start` _in another._
