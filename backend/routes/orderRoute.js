import express from "express";
import {
  allOrders,
  palceOrder,
  updateStatus,
  userOrders,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

orderRouter.post("/place", authUser, palceOrder);

orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
