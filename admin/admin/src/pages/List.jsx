import React, { useEffect } from "react";
import axios from 'axios';
import { backend_url } from "../App";

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backend_url + '/api/product/list')
      console.log(response.data)
    } catch (error) {
      
    }
  };
  useEffect(()=>{
    fetchList()
  },[list])
  return <div>List</div>;
};

export default List;
