import express from "express";
const router = express.Router();
import { admin, cashierOrAdmin } from "../middleware/auth.js";

import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controller/productController.js";

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", admin, createProduct);
router.put("/:id", cashierOrAdmin, updateProduct);
router.delete("/:id", admin, deleteProduct);

export default router;
