import express from "express";
import { addToCart,getUserCart,updateCart } from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add",authUser,addToCart)
cartRouter.post("/get",authUser,getUserCart)
cartRouter.post("/update",authUser,updateCart)
cartRouter.post("/clear", authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;
    await Cart.updateOne({ userId }, { cartData: {} }); // or deleteMany if needed
    res.json({ success: true, message: "Cart cleared successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default cartRouter