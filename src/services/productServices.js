import { Product } from '../models/product.js';

export const getAllProducts = (category) => {
  return category ? Product.find({ category }) : Product.find();
};

export const getProductById = (id) => {
  return Product.findById(id);
};

export const createProduct = (data) => {
  const product = new Product(data);
  return product.save();
};

