import express from 'express';
import { getProduct, getProducts, createProduct } from '../controller/products.mjs';

const router = express.Router();

router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const result = await getProduct(name);
  res.status(200).json(result);
})

router.get('/', async (req, res) => {
  const results = await getProducts();
  res.status(200).json(results);
});

router.post('/', async (req, res) => {
  const result = await createProduct(req.body);
  res.status(200).json(result);
});

export default router;
