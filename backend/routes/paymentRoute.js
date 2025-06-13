import express from "express";
import {
  placeOrderRazor,
  verifyRazorPayment,
} from "../controllers/paymentController.js";
import authUser from "../middleware/auth.js";

const paymentRouter = express.Router();

paymentRouter.post("/create-order", authUser, placeOrderRazor);
paymentRouter.post("/verify", authUser, verifyRazorPayment);

export default paymentRouter;
