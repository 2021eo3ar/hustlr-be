import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  price: z.number(),
  inStock: z.boolean().optional()
});