import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
//Controller function for adding a project
const addproduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, popular } =
      req.body;
    //Extraction images if provided
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    //Upload images to Cloudinary or use a default image
    let imagesUrl;

    if (images.length > 0) {
      imagesUrl = await Promise.all(
        images.map(async (item) => {
          const result = await cloudinary.uploader.upload(item.path, {
            resource_type: "image",
          });
          return result.secure_url;
        })
      );
    } else {
      //Default image URL if no images are provided
      imagesUrl = ["https://via.placeholder.com/150"];
    }

    //Create product data
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      popular: popular == "true" ? true : false,
      sizes: sizes ? JSON.parse(sizes) : [], //default empty array
      image: imagesUrl,
      date: Date.now(),
    };
    console.log(productData);

    const product = new productModel(productData);

    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Controller function to remove product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Controller function for single product details
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addproduct, listProduct, removeProduct, singleProduct };
