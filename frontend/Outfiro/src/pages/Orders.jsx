import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { products } from "../assets/data";
import { ShopContext } from "../context/ShopContext";
import Footer from "../components/Footer";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  //temporary data
  useEffect(() => {
    const data = products.slice(0, 5);
    setOrderData(data);
  }, [products]);
  return (
    <div>
      <div className="bg-primary mb-16">
        {/* container */}
        <div className="max-padd-container py-10">
          <Title title1={"Order"} title2={" List"} />
          {orderData.map((item, i) => (
            <div key={i} className="bg-white p-2 mt-3 rounded-lg">
              <div className="text-gray-700 flex flex-1 flex-col gap-4">
                <div className="flex gap-x-3 w-full">
                  <div className="flex gap-6">
                    <img
                      src={item.image[0]}
                      alt="productimg"
                      className="rounded-lg sm:w-[77px]"
                    />
                  </div>
                  {/* order info */}
                  <div className="block w-full">
                    <h5 className="h5 capitalize line-clamp-1">{item.name}</h5>
                    <div className="flexBetween flex-wrap">
                      <div>
                        <div className="flex items-center gap-x-2 sm:gap-x-3">
                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Price: </h5>
                            <p>
                              {currency}
                              {item.price}
                            </p>
                          </div>
                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Quantity: </h5>
                            <p>{item.quantity}</p>
                          </div>
                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Size: </h5>
                            <p>{item.size}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <h5 className="medium-14">Date:</h5>
                          <p>{new Date(item.date).toDateString()}</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <h5>payment</h5>
                          <p>{"Stripe"}</p>
                        </div>
                      </div>
                      {/* Status & button */}
                      <div className="flex items-center gap-2">
                        <div>
                          <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                          <p>{item.status}</p>
                        </div>
                        <button className="btn-secondary !text-xs !p-1.5 !py-1">
                          Track Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
