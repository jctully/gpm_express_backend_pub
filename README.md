## After cloning repo

### 1. Install dependencies

`$ npm install`

#### To check that its running:

`$ nodemon server`

You should now see an output similar to the following:

![image of nodemon](https://cdn-images-1.medium.com/max/857/0*Mv8An6HFQJMU5b8m.png)


### 2. Install MongoDB

On MacOS this task can be completed by using the following command:
`$ brew install mongodb`

Having installed MongoDB on your system you need to create a data directory which is used by MongoDB:

`$ mkdir -p /data/db`

* Before running the next command, make sure you have read and write privileges for the directory. *

Now we’re ready to start up MongoDB by executing the following command:

`$ mongod`

This should output: 

![mongod output](https://cdn-images-1.medium.com/max/857/0*JEC4FJ-yg3rdlmDt.png)

This shows that the database is now running on port 27017 and is waiting to accept client connections.

### 3. Create new MongoDB database

* Make sure you're running `$ mongod` in a separate terminal session. *

`$ mongo`

Once you're connected, switch to a new database *todos*:

`use todos`

The full tutorial can be viewed [here](https://medium.com/codingthesmartway-com-blog/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2-637f337e5d61)
