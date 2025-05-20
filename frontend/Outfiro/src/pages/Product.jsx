import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar, FaStarHalfStroke, FaTruckFast } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { TbH5, TbShoppingBagPlus } from "react-icons/tb";

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
      <div>
        {/* product data */}
        <div>
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
          <div className="">
            <h3 className="h3">{product.name}</h3>
            {/* Rating And Pricing */}
            <div>
              <h5 >Price: ${product.price}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
