import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
import {
  getProductById,
  getProducts,
  createProductReview,
  getTopProducts,
} from "../controllers/ProductController.js";

router.route("/").get(getProducts);
router.get("/top", getTopProducts);
router.route("/:id").get(getProductById);
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
