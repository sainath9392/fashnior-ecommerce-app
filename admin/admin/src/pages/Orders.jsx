import React from "react";
import { useState } from "react";
import axios from "axios";
import { backend_url } from "../App";
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

  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return (
    <div>
      <div>
        {orders.map((order) => (
          <div key={order._id}>
            <div>
              <TfiPackage />
            </div>
            <div>
              <div>
                <div>Items:</div>
                <div>
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
                <span>Name: </span>
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <p className="medium-14">
                <span className="'text-tertiary">
                  Address:
                </span>{" "}<span>{order.address.street + ", " }</span>
                <span>{order.address.city + ", " }</span>
                <span>{order.address.state + ", " }</span>
                <span>{order.address.country + ", " }</span>
                <span>{order.address.zipcode + ", " }</span>
              </p>
              <p>Phone: <span>{order.address.phone}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
