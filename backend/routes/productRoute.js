import express from "express";
import {
  addproduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController";

const productRouter = express.Router();

productRouter.post("/add", addproduct);
productRouter.delete("/remove", removeProduct);
productRouter.get("/single", singleProduct);
productRouter.get("list", listProduct);

export default productRouter
