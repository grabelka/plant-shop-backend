import { saveProductToCart, getAllProducts } from '../services/cart.mjs';

const getCart = async () => {
  const results = await getAllProducts();
  return results;
}

const addProduct = async (body) => {
  const result = await saveProductToCart(body);
  return result;
}

export {
  getCart,
  addProduct
}
