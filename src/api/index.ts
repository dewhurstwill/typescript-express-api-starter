// Node Modules
import express from 'express';

// Importing the emojis route
import emojis from './emojis';

const router = express.Router();

// GET - /api/v1/
router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

// Consuming the emojis route
router.use('/emojis', emojis);

export default router;
