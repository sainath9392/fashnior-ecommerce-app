// Controller function for placing order using COD method
const palceOrder = async (req, res) => {};

//Controller function for placing order using STRIPE method
const palceOrderStripe = async (req, res) => {};

//Controller function for getting all orders data for Admin panel
const allOrders = async (req, res) => {};

//Controller function for getting user orders for frontend
const userOrders = async (req, res) => {};

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
