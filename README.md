# University Search Application

## How to run the application

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up MySQL database:
   - Create a database named `university_app`.
   - Create the following tables using the provided SQL schema:
     ```sql
     CREATE TABLE IF NOT EXISTS favorites (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       state_province VARCHAR(255),
       web_page VARCHAR(255) NOT NULL
     );
     ```
   - Update the MySQL connection details in `.env` based on `.env.example`.

4. Start the server: `npm run dev`.
5. Open `http://localhost:3000/pages/search.html` and `http://localhost:3000/pages/search.html` in your browser to interact with the application.

## Endpoints

- **GET /api/search**: Fetches universities in India.
- **POST /api/favorites**: Saves a university to the favorites.
- **GET /api/favorites**: Fetches all saved favorite universities from the database.
