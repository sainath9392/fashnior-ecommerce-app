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
    const amountInInr = parseInt(amount);
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

    // Logging for debugging
    console.log("=== Razorpay Payment Verification Debug ===");
    console.log("Received Order ID:", razorpay_order_id);
    console.log("Received Payment ID:", razorpay_payment_id);
    console.log("Received Signature:", razorpay_signature);

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZOR_API_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    console.log("Generated Signature:", generatedSignature);

    // Signature verification
    if (generatedSignature.trim() === razorpay_signature.trim()) {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      console.log("✅ Payment Verified. Order updated.");
      res.status(200).json({ success: true, message: "Payment verified" });
    } else {
      console.log("❌ Signature mismatch.");
      console.log("Trimmed Received:", `"${razorpay_signature.trim()}"`);
      console.log("Trimmed Generated:", `"${generatedSignature.trim()}"`);
      res.status(400).json({ success: false, message: "Invalid signature" });
    }
  } catch (error) {
    console.log("❌ Error during verification:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { placeOrderRazor, verifyRazorPayment };
