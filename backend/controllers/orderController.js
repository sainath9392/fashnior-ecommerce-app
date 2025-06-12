// Controller function for placing order using COD method
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const palceOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Controller function for placing order using STRIPE method
const palceOrderStripe = async (req, res) => {};

//Controller function for getting all orders data for Admin panel
const allOrders = async (req, res) => {};

//Controller function for getting user orders for frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error.message });
  }
};

//Controller function for updating status of orders for admin panel
const updateStatus = async (req, res) => {};
//Controller function for verifying stripe
const verifyStripe = async (req, res) => {};

export {
  palceOrder,
  palceOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
};
