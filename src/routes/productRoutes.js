import express from 'express';
import { getProducts, getProduct, addProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts); // GET /products?category=... use the same route for getting the product by category
router.get('/:id', getProduct);
router.post('/', addProduct);



export default router;