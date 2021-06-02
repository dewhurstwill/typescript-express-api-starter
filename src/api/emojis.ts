// Node modules
import express from 'express';

const router = express.Router();

// GET - /api/v1/emojis
router.get('/', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});

export default router;
