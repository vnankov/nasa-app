# NASA Mission control project 

## Setup project
- Install node_modules dependencies in both server and client
  - `cd server` and then `npm i`
  - `cd client` and then `npm i`
- Go to the root of the app and run `npm run deploy`

## Project development report

I. **Server-side project**
1. Create a server powered by NodeJS and express.
   - init the server by server.js file
   - create a package.json file and install dependencies
2. Create a basic structure to distribute the system like - routes/models/controllers
3. Work on the data management 
4. Create routers for different pages
   - Create all routes that are needed, with their respective functionality and default responses
   - Make routing managed by React
4. Build the front-end prod-ready files directly into the server and use static file rendering to serve them.
5. Add tests for GET/POST launches
   - Create test coverage for basic CRUD operations in the app for static data
   - Do the same but now use MongoDB as a source of truth for data
6. Data payload
   - Download a .csv file from NASA, to be used as data payload.
   - Create a model to parse all habitable planets and await their load
   - Load data from the local database
   - Load data from NASA API cloud MongoDB 
   - Populate the database with data from NASA API

II. **Client-side project**
1. Use a client app created by NASA, powered by React. (partially developed)
2. Install dependencies from client package.json file
3. Create API for getting all habitable planets
4. Create API for getting single planet data
5. Create API for launching a mission to a given planet
6. Create API to delete scheduled missions

II. **Database project**
1. Create a new cloud database called nasa-api
2. Create a user for this database to be connected
3. Connect to the database from the server
4. Populate the data in the server from the database

