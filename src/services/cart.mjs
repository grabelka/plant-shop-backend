import db from '../db/mongo.mjs';

const collection = db.collection('cart');

const getAllProducts = async () => {
  let cursor = collection.find({});
  const results = await cursor.toArray();
  return results;
}

const saveProductToCart = async (data) => {
  let savedResult = await collection.insertOne(data);
  return savedResult;
}

export {
  saveProductToCart,
  getAllProducts
}