import express from "express";
import {
  allOrders,
  palceOrder,
  palceOrderStripe,
  updateStatus,
  userOrders,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js"

const orderRouter = express.Router();

orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

orderRouter.post("/place", authUser,palceOrder);
orderRouter.post("/stripe",authUser, palceOrderStripe);

orderRouter.post("/userorders",authUser, userOrders);

orderRouter.post("/verifystripe",authUser,verifyStripe)

export default orderRouter