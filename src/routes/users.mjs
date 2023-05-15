import express from 'express';
import { getUser, getUsers, createUser } from '../controller/users.mjs';
import { authenticate } from '../middleware/authenticate.mjs';

const router = express.Router();

// getUser
router.get('/:email', authenticate, async (req, res) => {
  const { email } = req.params;
  const result = await getUser(email);
  res.status(200).json(result);
})

// getAllUser
router.get('/', async (req, res) => {
  const results = await getUsers();
  res.status(200).json(results);
});

// saveUser
router.post('/', async (req, res) => {
  const result = await createUser(req.body);
  res.status(200).json(result);
});

export default router;
