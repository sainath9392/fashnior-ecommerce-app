import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import Footer from "../components/Footer";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

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
    backendUrl,
  } = useContext(ShopContext);
  const [method, setmethod] = useState("cod");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });

  const onChangehandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount:
          getCartAmount() > 500
            ? getCartAmount()
            : getCartAmount() + delivery_charges,
      };
      switch (method) {
        //api calls for COD
        case "cod": {
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          console.log(response);
          if (response.data.success) {
            toast.success(response.data.message);
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;
        }

        case "razorpay": {
          const createOrderResponse = await axios.post(
            backendUrl + "/api/payment/create-order",
            orderData,
            {
              headers: { token },
            }
          );

          if (!createOrderResponse.data.success) {
            toast.error("Failed to create Razorpay order");
            return;
          }

          const { orderId, amount, currency, razorpay_key_id, order_db_id } =
            createOrderResponse.data;

          const options = {
            key: razorpay_key_id,
            amount: amount,
            currency: currency,
            name: "Fashnior",
            description: "Order Payment",
            order_id: orderId,
            handler: async function (response) {
              try {
                await axios.post(
                  backendUrl + "/api/payment/verify",
                  {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                    orderId: order_db_id,
                  },
                  {
                    headers: { token },
                  }
                );

                toast.success("Payment Successful!");
                setCartItems({});
                localStorage.removeItem("cartItems");
                setTimeout(() => navigate("/orders"), 100);
              } catch (error) {
                toast.error("Payment verification failed");
              }
            },
            prefill: {
              name: `${formData.firstName} ${formData.lastName}`,
              email: formData.email,
              contact: formData.phone,
            },
            theme: {
              color: "#3399cc",
            },
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
          break;
        }
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="bg-primary mb-16">
        {/* Container */}
        <form onSubmit={onSubmitHandler} className="max-padd-container py-10">
          <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
            {/* leftSide */}
            <div className="flex flex-1 flex-col gap-3 text-[95%]">
              <Title title1={"Delivery"} title2={"Information"} />
              <div className="flex gap-3">
                <input
                  type="text"
                  onChange={onChangehandler}
                  value={formData.firstName}
                  name="firstName"
                  required
                  placeholder="First Name"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />

                <input
                  type="text"
                  onChange={onChangehandler}
                  value={formData.lastName}
                  name="lastName"
                  required
                  placeholder="Last Name"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>
              <input
                type="email"
                onChange={onChangehandler}
                value={formData.email}
                name="email"
                required
                placeholder="Your@mail.com"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
              />
              <input
                type="number"
                onChange={onChangehandler}
                value={formData.phone}
                name="phone"
                required
                placeholder="Phone Number"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
              />
              <input
                type="text"
                onChange={onChangehandler}
                value={formData.street}
                name="street"
                required
                placeholder="Street"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
              />

              <div className="flex gap-3">
                <input
                  type="text"
                  onChange={onChangehandler}
                  value={formData.city}
                  name="city"
                  required
                  placeholder="City"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />

                <input
                  type="text"
                  onChange={onChangehandler}
                  value={formData.state}
                  name="state"
                  required
                  placeholder="State"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  onChange={onChangehandler}
                  value={formData.zipcode}
                  name="zipcode"
                  required
                  placeholder="Zip Code"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />

                <input
                  type="text"
                  onChange={onChangehandler}
                  value={formData.country}
                  name="country"
                  required
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
                <h3 className="bold-20 mb-5">
                  Payment <span className="text-secondary">Method</span>
                </h3>
                <div className="flex gap-3">
                  <div
                    onClick={() => setmethod("razorpay")}
                    className={`${
                      method === "razorpay" ? "btn-dark" : "btn-white"
                    } !py-1 text-xs cursor-pointer border border-gray-300`}
                  >
                    Razor Pay
                  </div>
                  <div
                    onClick={() => setmethod("cod")}
                    className={`${
                      method === "cod" ? "btn-dark" : "btn-white"
                    } !py-1 text-xs cursor-pointer border border-gray-300`}
                  >
                    Cash On Delivery
                  </div>
                </div>
              </div>
              <div className="">
                <button type="submit" className="btn-secondary">
                  Place Order
                </button>
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
