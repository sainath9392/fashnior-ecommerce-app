import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

import Item from "./Item";


const RelatedProducts = ({category, subCategory}) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let filtered = products.slice();

      filtered = filtered.filter((Item) => category === Item.category);
      filtered = filtered.filter((item) => subCategory === item.subCategory);

      setRelated(filtered.slice(0,6));
    }
  }, [ products]);
  return (
    <section className="mt-8 maxx-padd-container">
      <Title title1={"Related"} title2={"Products"} title1Styles={"pb-4"}/>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {related.map((item,i)=>(
            <Item product={item} key={item._id} />
          ))}
        </div>
    </section>
  );
};

export default RelatedProducts;
