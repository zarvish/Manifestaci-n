import connection from '../config/db.js';

// Function to check if a favorite already exists in the database
export const checkFavoriteExists = async (name, state_province, web_page) => {
    const query = 'SELECT * FROM favorites WHERE name = ? AND state_province = ? AND web_page = ?';
    const [rows] = await connection.execute(query, [name, state_province, web_page]);
    return rows.length > 0;
};

// Function to save a favorite university to the database
export const saveFavoriteToDB = async (name, state_province, web_page) => {
    const query = 'INSERT INTO favorites (name, state_province, web_page) VALUES (?, ?, ?)';
    await connection.execute(query, [name, state_province, web_page]);
};

// Function to retrieve all favorite universities from the database
export const getAllFavorites = async () => {
    const query = 'SELECT * FROM favorites';
    const [results] = await connection.execute(query);
    return results;
};
