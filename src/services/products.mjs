import db from '../db/mongo.mjs';

const collection = db.collection('products');

const getProduct = async (name) => {
  let result = await collection.findOne({name});
  return result;
}

const getAllProducts = async () => {
  let cursor = collection.find({});
  const results = await cursor.toArray();
  return results;
}

const saveProduct = async (data) => {
  let savedResult = await collection.insertOne(data);
  return savedResult;
}

export {
  getProduct,
  saveProduct,
  getAllProducts
}