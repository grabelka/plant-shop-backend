import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config.mjs';
import userRouter from './routes/users.mjs';
import authRouter from './routes/auth.mjs';
import cartRouter from './routes/cart.mjs';
import productsRouter from './routes/products.mjs';
import cors from 'cors';

const app = express()
const port = config.PORT;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/cart', cartRouter);
app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})