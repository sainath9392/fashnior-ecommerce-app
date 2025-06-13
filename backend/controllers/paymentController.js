import Razorpay from "razorpay";
import orderModel from "../models/orderModel.js";
import crypto from "crypto";

const razorpay = new Razorpay({
  key_id: process.env.RAZOR_API_KEY,
  key_secret: process.env.RAZOR_API_SECRET,
});

const placeOrderRazor = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body; // USD amount
    const usdToInr = 83.5;
    const amountInInr = parseFloat((amount * usdToInr).toFixed(2));
    const amountInPaise = Math.round(amountInInr * 100);

    const orderData = {
      userId,
      items,
      amount: amountInInr,
      address,
      paymentMethod: "RAZORPAY",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const razorpayOrder = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR",
      receipt: `order_rcptid_${newOrder._id}`,
      notes: {
        orderId: newOrder._id.toString(),
      },
    });

    res.status(200).json({
      success: true,
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      order_db_id: newOrder._id,
      razorpay_key_id: process.env.RAZOR_API_KEY,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const verifyRazorPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      orderId,
    } = req.body;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZOR_API_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature === razorpay_signature) {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.status(200).json({ success: true, message: "Payment verified" });
    } else {
      res.status(400).json({ success: false, message: "Invalid signature" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { placeOrderRazor, verifyRazorPayment };
