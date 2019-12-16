import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => res.json({ status: 'Welcome to the TREP lifestyle' }));

export default router;
