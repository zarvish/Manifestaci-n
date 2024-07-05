import axios from 'axios';
import { checkFavoriteExists, saveFavoriteToDB, getAllFavorites } from '../services/favouritesService.js';
import { asyncHandler } from '../utils/asyncHandler.js';



// Function to search universities based on the provided country
export const searchUniversities = asyncHandler(async (req, res) => {
    const country = req.query.country || 'India';
    const response = await axios.get(`${process.env.UNIVERSITY_API_URL}/search?country=${country}`);
    res.json(response.data);
});

// Function to save a favorite university to the database
export const saveFavorite = asyncHandler(async (req, res) => {
    const { name, state_province, web_page } = req.body;

    // Check if the favorite already exists in the database
    if (await checkFavoriteExists(name, state_province, web_page)) {
        return res.status(400).json({ message: 'Favorite already exists' });
    }

    // Save the favorite if it doesn't exist
    await saveFavoriteToDB(name, state_province, web_page);
    res.status(200).json({ message: 'Favorite saved successfully' });
});

// Function to retrieve all favorite universities from the database
export const getFavorites = asyncHandler(async (req, res) => {
    const favorites = await getAllFavorites();
    res.status(200).json(favorites);
});
