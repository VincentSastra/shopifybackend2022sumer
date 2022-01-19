# Shopify Backend Internship Challenge 2022
Project is build using Express Node.js

## Viewing the project on my hosted services
Go to http://shopifyui.vincentsastra.com to view the UI (hosted on GithubPages)  
Go to http://shopify.vincentsastra.com to interact with the backend server directly (hosted on Azure VM)

## Local Installation
1. Install Node.JS
Follow the steps here and install NodeJS 14 or later
https://nodejs.org/en/download/current/
2. **Clone the repository**  
On your terminal run ```git clone https://github.com/VincentSastra/shopifybackend2022sumer```
3. **Install backend dependencies**  
Change to the backend directory ```cd backend```  
Run npm install ```npm install```
4. **Configure a MongoDB database**  
One option is to create an account in Atlas and use their free tier: https://www.mongodb.com/cloud/atlas/register  
Another option is to use my Account (will be taken down by Match 2022)
5. **Setup .env file**  
Edit `.env` file in the `./backend` folder
If you're using my MongoDB database, leave it as is  
**NOTE: ON REAL PROJECT I WILL NEVER GIVE CREDENTIALS AND .ENV FILES. I have provided the .env file for demo purposes. The credentials provided have a very limited scope on my account**
6. **Run the Express Backend Server**  
Run ```npm start```
Or to develop using hot reload run ```npm run dev```  
7. **Install frontend dependency**  
Change to the frontend directory ```cd frontend```  
Run npm install ```npm install```
8. **Run React Frontend UI**  
Run ```npm start```   
9. **Viewing the server and UI**  
Go to http://localhost:3000 to view the UI  
Go to http://localhost:5000 to interact with the backend server directly

## Backend Project Structure
* [./backend/routes/*.js](https://github.com/VincentSastra/shopifybackend2022sumer/tree/master/backend/routes) How the server handle requests
* [./app.js](https://github.com/VincentSastra/shopifybackend2022sumer/blob/master/backend/app.js) Connect the routes, setup CORS, handle errors
* [./backend/util/db.js](https://github.com/VincentSastra/shopifybackend2022sumer/blob/master/backend/util/db.js) MongoDB Driver