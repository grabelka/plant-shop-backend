import express from 'express';
import { authenticate } from '../middleware/authenticate.mjs';
import { getCart, addProduct } from '../controller/cart.mjs';

const router = express.Router();

router.get('/', authenticate, async (req, res) => {
  const results = await getCart();
  res.status(200).json(results);
});

router.post('/', authenticate, async (req, res) => {
  const result = await addProduct(req.body);
  res.status(200).json(result);
});

export default router;
