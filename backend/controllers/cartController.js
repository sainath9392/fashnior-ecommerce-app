import userModel from "../models/userModel";

//controller function for add products to cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await userModel.findById(userId);
    const cartData = await userData.cartData

    if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size] += 1
        }else{
            cartData[itemId][size] = 1
        }
    }else{
        cartData[itemId] = {}
        cartData[itemId][size] = 1
    }
    await userModel.findByIdAndUpdate(userId,{cartData})
    res.json({succes:true,message:"Added to Cart"})
  } catch (error) {
    console.log(error)
    res.json({success:true,message:"Added to Cart"})
  }
};

//controller function for update cart
const updateCart = async (req, res) => {};
//controller function for update cart
const getUserCart = async (req, res) => {};

export { addToCart, updateCart, getUserCart };
