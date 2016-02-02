Cowabunga
====

This is a starter project with React, Redux, Babel, ES6+. 
---

###Getting Started###

```
    > git clone https://github.com/Gennon/Cowabunga.git
    > cd Cowabunga
    > npm install
    > cd server
    > npm install
```

####Starting the backend server####

Open a new terminal window and go into the server directory.

```
  > cd server
  # On mac/linux
  > DEBUG=server:* npm start
  # On windows
  > set DEBUG=server:* & npm start
```

This will start a server that will serve the Rest API on http://localhost:9090/api


####Starting the developer webpack server####

Open a new terminal window and go into the Cowabunga directory.

```
  > cd Cowabunga
  > npm start
```

This will start a small server that will host the website. It will automatically build a new version when any js/jsx file is altered.
The server can be located at http://localhost:8080


####Running tests####

From the Cowabunga project folder just run:

```
  > npm test
```

This will run all the tests for the project. Note that there are no tests for the server part.

