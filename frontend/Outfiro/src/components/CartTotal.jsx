import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, getCartAmount, delivery_charges, getCartcount } =
    useContext(ShopContext);

  return (
    <section>
      <Title title1={`Cart`} title2={` Total`} title1Styles={"h3"} />
      <div className="flexBetween pt-3">
        <h5 className="h5">SubTotal:</h5>
        <p className="h5">
          {currency}
          {getCartAmount()}.00
        </p>
      </div>
      <hr className="mx-auto h-[1px] text-gray-300 w-full bg-gray-900/10 my-1 " />
      <div className="flexBetween pt-3">
        <h5 className="h5">Shipping Fee:</h5>
        <p className="h5">
          {currency}
          {getCartAmount() == 0
            ? "0.00"
            : getCartAmount() < 500
            ? getCartcount() * delivery_charges + `.00`
            : "0.00"}
        </p>
      </div>
      <hr className="mx-auto h-[1px] text-gray-300 w-full bg-gray-900/10 my-1 " />
      <div className="flexBetween pt-3">
        <h5 className="h5">Total Amount:</h5>
        <p className="h5">
          {currency}
          {getCartAmount() == 0
            ? 0 + ".00"
            : getCartAmount() > 500
            ? getCartAmount() + ".00"
            : delivery_charges * getCartcount() + getCartAmount() + ".00"}
        </p>
      </div>
      <hr className="mx-auto h-[1px] text-gray-300 w-full bg-gray-900/10 my-1 " />
    </section>
  );
};

export default CartTotal;
