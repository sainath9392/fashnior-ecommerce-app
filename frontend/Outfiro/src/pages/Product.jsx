import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar, FaStarHalfStroke, FaTruckFast } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { TbH5, TbShoppingBagPlus } from "react-icons/tb";
import ProductDescription from "../components/ProductDescription";
import ProductFeatures from "../components/ProductFeatures";
import Footer from "../components/Footer";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProduct(selectedProduct);
      setImage(selectedProduct.image[0]);
      console.log(selectedProduct);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!product) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <div className="max-padd-container mt-4">
        {/* product data */}
        <div className="flex flex-col gap-12 xl:flex-row bg-white pb-16 rounded-2xl">
          {/* Product Image */}
          <div className="flex flex-1 gap-x-2 xl:flex-1">
            <div className="flexCenter flex-col gap-3.5 flex-wrap">
              {product.image.map((item, i) => (
                <img
                  key={i}
                  src={item}
                  onClick={() => setImage(item)}
                  alt={`product/${product._id}`}
                  className="max-h-[89px] rounded-lg"
                />
              ))}
            </div>

            <div className="max-h-377px w-auto flex">
              <img
                src={image}
                alt={`product/${product._id}`}
                className="rounded-xl bg-gray-50"
              />
            </div>
          </div>
          {/* Product Info */}
          <div className="flex-[1.5] rounded-2xl xl:px-7">
            <h3 className="h3 leading-none">{product.name}</h3>
            {/* Rating And Pricing */}
            <div className="flex items-baseline gap-x-5">
              <div className="flex items-center gap-x-2 text-secondary">
                <div className="flex gap-x-2 text-secondary">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <span className="medium-14">(122)</span>
              </div>
            </div>

            <h4 className="h4 my-2">
              {currency}
              {product.price}
            </h4>
            <p className="max-w-[555px]">{product.description}</p>

            <div className="flex flex-col gap-4 my-4 mb-5">
              <div className="flex gap-2">
                {[...product.sizes]
                  .sort((a, b) => {
                    const order = ["S", "M", "L", "XL", "XXL"];
                    return order.indexOf(a) - order.indexOf(b);
                  })
                  .map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setSize(item)}
                      className={`${
                        item === size
                          ? "ring-1 ring-slate-900/20"
                          : "ring-1 ring-slate-900/5 "
                      } medium-14 h-8 w-10 bg-primary rounded`}
                    >
                      {item}
                    </button>
                  ))}
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <button className="btn-secondary !rounded-lg w-1/2 flexCenter gap-x-2 capitalize">
                Add To Cart <TbShoppingBagPlus />
              </button>
              <button className="btn-light !rounded-lg !py-3.5 text-red-500">
                <FaHeart />
              </button>
            </div>
            <div className="flex items-center gap-x-2 mt-3">
              <FaTruckFast className="text-lg" />
              <span>Free Delivery on orders over 500$</span>
            </div>
            <hr className="my-3 w-2/3" />
            <div className="mt-2 flex flex-col gap-1 text-gray-500 text-xs">
              <div>Authenticy You Can Trust</div>
              <div>Enjoy Cash on Delivery for Your Convenience</div>
              <div>Easy Returns and Exchanges within 7days </div>
            </div>
          </div>
        </div>
        <ProductDescription />
        <ProductFeatures />
        <RelatedProducts />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
