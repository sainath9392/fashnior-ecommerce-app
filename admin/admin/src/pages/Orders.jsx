import React from "react";
import { useState } from "react";
import axios from "axios";
import { backend_url, currency } from "../App";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { TfiPackage } from "react-icons/tfi";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backend_url + "/api/order/list",
        {},
        { headers: { token } }
      );
      console.log(response.data);
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
        console.log(orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(
        backend_url + "/api/order/status",
        { orderId, status: e.target.value },
        { headers: { token } }
      );
      if(response.data.success){
        await fetchAllOrders()
      }else{
        console.log(response.data.message)
       toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return (
    <div className="px-2 sm:px-8 mt-4 sm:mt-14">
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_0.5fr_1fr] gap-4 items-start p-3 text-gray-700 bg-white rounded-lg"
          >
            <div className="text-3xl text-secondary">
              <TfiPackage />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <div className="text-tertiary medium-14">Items:</div>
                <div className="flex flex-col relative top-0">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return (
                        <p key={index}>
                          {item.name} * {item.quantity}{" "}
                          <span>"{item.size}"</span>
                        </p>
                      );
                    } else {
                      return (
                        <p key={index}>
                          {item.name} * {item.quantity}{" "}
                          <span>"{item.size}"</span>
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
              <p className="medium-14">
                <span className="text-tertiary">Name: </span>
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <p className="medium-14">
                <span className="text-tertiary">Address:</span>{" "}
                <span>{order.address.street + ", "}</span>
                <span>{order.address.city + ", "}</span>
                <span>{order.address.state + ", "}</span>
                <span>{order.address.country + ", "}</span>
                <span>{order.address.zipcode + ", "}</span>
              </p>
              <p className="">
                <span className="text-tertiary medium-14">Phone:</span>{" "}
                {order.address.phone}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">
                <span className="medium-14 text-tertiary">Total: </span>
                {order.items.length}
              </p>
              <p className="text-sm">
                <span className="medium-14 text-tertiary">Method: </span>
                {order.paymentMethod}
              </p>
              <p className="text-sm">
                <span className="medium-14 text-tertiary">Payment: </span>
                {order.payment ? "Done" : "Pending"}
              </p>
              <p className="text-sm">
                <span className="medium-14 text-tertiary">Date: </span>
                {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <p className="text-sm font-semibold">
              {currency} {order.amount}
            </p>
            <select
              value={order.status}
              onChange={(e)=>statusHandler(e,order._id)}
              className="ring-1 ring-slate-900/5 rounded max-w-36 font font-semibold text-xs bg-primary p-1"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
