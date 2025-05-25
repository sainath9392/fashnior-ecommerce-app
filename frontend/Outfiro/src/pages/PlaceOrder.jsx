import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import Footer from "../components/Footer";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const {
      products,
      cartItems,
      delivery_charges,
      token,
      getCartAmount,
      setCartItems,
      getCartcount,
      navigate,
    } = useContext(ShopContext);
    const [method, setmethod] = useState('cod');

  return (
    <div>
      <div className="bg-primary mb-16">
        {/* Container */}
        <form className="max-padd-container py-10">
          <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
            {/* leftSide */}
            <div className="flex flex-1 flex-col gap-3 text-[95%]">
              <Title title1={"Delivery"} title2={"Information"} />
              <div className="flex gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your@mail.com"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
              />
              <input
                type="text"
                name="street"
                placeholder="Street"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
              />

              <div className="flex gap-3">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>
            </div>
            {/* RightSide */}
            <div className="flex flex-1 flex-col">
              <CartTotal />
              {/* PaymentMethod */}
              <div className="my-6">
                <h3 className="bold-20 mb-5">Payment <span className="text-secondary">Method</span></h3>
                <div className="flex gap-3">
                  <div onClick={()=>setmethod('stripe')} className={`${method === 'stripe' ? "btn-dark" : "btn-white"} !py-1 text-xs cursor-pointer`}>Stripe</div>
                  <div onClick={()=>setmethod('cod')} className={`${method === 'cod' ? "btn-dark" : "btn-white"} !py-1 text-xs cursor-pointer`}>Cash On Delivery</div>
                </div>
              </div>
              <div className="">
                <button type="submit" className="btn-secondary" >Place Order</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;
