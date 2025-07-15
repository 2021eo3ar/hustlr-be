import * as productService from '../services/productServices.js';
import { createProductSchema } from '../validators/productValidators.js'

export const getProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const products = await productService.getAllProducts(category);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const parsed = createProductSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.errors });
    }
    const product = await productService.createProduct(parsed.data);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
