import React, { useEffect, useState } from "react";
import axios from "axios";
import { backend_url } from "../App";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import { currency } from "../App";
import {TbTrash} from "react-icons/tb"

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backend_url + "/api/product/list");
      console.log(response.data);
      setList(response.data.products);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backend_url + "/api/product/remove",
        {id},
        {
          headers: { token },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList(); // Refresh the list after removal
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="px-2 sm:px-8 sm:mt-14">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_3.5fr_1.5fr_1fr_1fr] items-center py-1 px-2 bg-white bold-14 sm:bold-15 mb-1 rounded">
          <h5>Image</h5>
          <h5>Name</h5>
          <h5>Category</h5>
          <h5>Price</h5>
          <h5>Remove</h5>
        </div>
      </div>
      {list.map((item)=>(
        <div key={item._id} className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_3.5fr_1.5fr_1fr_1fr] items-center py-1 px-2 bg-white bold-14 sm:bold-15 mb-1 rounded">
          <img src={item.image[0]} alt="productimg" className="w-14 h-17 rounded-lg" />
          <h5 className="text-sm font-semibold">{item.name}</h5>
          <p className="text-sm max-sm:ml-2 ml-2 font-semibold">{item.category}</p>
          <div className="text-sm font-semibold">{currency}{item.price}</div>
          <div className="text-right ml-5 md:text-center cursor-pointer" onClick={()=>removeProduct(item._id)}><TbTrash className="text-red-500" /></div>
        </div>
      ))}
    </div>
  );
};

export default List;
