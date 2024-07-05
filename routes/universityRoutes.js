// routes/universityRoutes.js
import express from 'express';
import { searchUniversities, saveFavorite, getFavorites } from '../controllers/universityController.js';

const router = express.Router();

router.get('/search', searchUniversities);
router.post('/favorites', saveFavorite);
router.get('/favorites', getFavorites);

export default router;
