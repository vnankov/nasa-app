# NASA Mission control project 

I. Server side project
1. Create Server powered by NodeJS and express.
 - init the server by server.js file
 - create package.json file and install dependencies
2. Create basic structure to distribute the system like - routes/models/controllers
3. Work on the data management 

4. Create routers for different pages
  - Create all routes which are needed, with their respective functionality and default responses
  - Make routing managed by React
4. Build the front-end prod ready files directly into the server and use static files rendering to serve them.
5. Add tests for GET/POST launches
  - Create test coverage for basic CRUD operations in the app for static data
  - Do the same but now use mongoDB as source of truth for data
6. Data payload
  - Download .csv file from Nasa, to be used as data payload.
  - Create a model to parse all habitable planets and await for their load
  - Load data from local database
  - Load data from NASA API
  - Populate the database with data from NASA API

II. Database project

III. Client side project
1. Use client app created by NASA, powered by React. (partially developed)
2. Install dependencies from root package.json
3. Create API for getting all habitable planets
4. Create API for getting single planet data
5. Create API for lunching a mission to a given planet
6. Create API to delete scheduled missions