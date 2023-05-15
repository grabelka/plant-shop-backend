import { getProduct as getProductByName, saveProduct, getAllProducts } from '../services/products.mjs';

const getProduct = async (name) => {
  const result = await getProductByName(name);
  return result;
}

const getProducts = async () => {
  const results = await getAllProducts();
  return results;
}

const createProduct = async (body) => {
  const result = await saveProduct(body);
  return result;
}

export {
  getProduct,
  getProducts,
  createProduct
}
