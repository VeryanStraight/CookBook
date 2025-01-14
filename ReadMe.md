# Cook Book

## Description
**Cook Book** is a web app designed to store and search your recipes, making it as convenient as a physical book but even better! This project is created for fun and to learn React and JavaScript.

## Features
- Search stored recipes by title
- Add and delete stored recipes
- Add and delete recipe tags

## Future Plans
- Host the database through GitHub
- Create an advanced search feature (search by tag, title, ingredients, method, time, or number of servings)
- Add metadata for time taken to prepare recipes

## How to Setup and Run
1. **Clone the Project Locally**
2. **Set Up Environment Variables**
   - In the `.env` file located in the `backend` folder, add:
     ```env
     DB_URI=<Your MongoDB URL>
     PORT=400 # or a port of your choosing
     ```
3. **Ensure MongoDB Structure**
   - The MongoDB used should be structured as defined in `backend/models`.
4. **Start the Backend**
   - In the `backend` folder, run:
     ```bash
     npm start
     ```
5. **Start the Frontend**
   - In the `frontend` folder, run:
     ```bash
     npm run dev
     ```
6. **Access the App**
   - In a browser, navigate to [http://localhost:5173/](http://localhost:5173/)

## Tools
- **Database**: MongoDB for storing recipes and recipe tags
- **Frontend**: TypeScript and React
- **Backend**: Node.js

