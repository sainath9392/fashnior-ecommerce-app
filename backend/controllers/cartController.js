
import userModel from "../models/userModel.js";

//controller function for add products to cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await userModel.findById(userId);
    const cartData = await userData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ succes: true, message: "Added to Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: true, message: "Added to Cart" });
  }
};

//controller function for update cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await userModel.findById(userId);
    const cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ succes: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error.message });
  }
};

//controller function for update cart
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);
    const cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const clearCart = async (req, res) => {
  try {
    const { userId } = req.body;
    await userModel.findByIdAndUpdate(userId, { cartData:{} });
    res.status(200).json({ success: true, message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart, clearCart };
