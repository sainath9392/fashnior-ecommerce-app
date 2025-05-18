import React, { useContext, useEffect, useState } from "react";
import ShowSearch from "../components/ShowSearch";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item"

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerpage = 10;

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    let filtered = [...products];
    

    if (search && showSearch) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length) {
      filtered = filtered.filter((product) =>
        category.includes(product.category)
      );
    }

    if (subCategory.length) {
      filtered = filtered.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

   
    return filtered;
    
  };

  const applySorting = (productsList) => {
    switch (sortType) {
      case "low":
        return productsList.sort((a, b) => a.price - b.price);
      case "high":
        return productsList.sort((a, b) => b.price - a.price);
      default:
        return productsList;
    }
  };

  useEffect(() => {
    let filtered = applyFilter();
    let sorted = applySorting(filtered);
    setFilteredProducts(sorted);
    setCurrentPage(1); // reset to the first page when filter is changed
  }, [category, subCategory, sortType, products, search, showSearch]);

  const getPaginatedProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerpage;
    const endIndex = startIndex + itemsPerpage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerpage);

   console.log(applyFilter());

  return (
    <div className="max-padd-container !px-0">
      <div className="flex flex-col sm:flex-row gap-8 mb-16">
        {/* Filter Options */}
        <div className="min-w-72 bg-primary p-4 pt-8 pl-6 lg:pl-12 rounded-r-xl">
          <ShowSearch />
          <div className="bg-white mt-4 rounded-xl pl-5 py-3">
            <h5 className="h5 mb-4">Categories</h5>
            <div className="flex flex-col gap-2 text-sm font-light">
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className="flex gap-2 medium-14 text-gray-500">
                  <input
                    type="checkbox"
                    onChange={(e) => toggleFilter(e.target.value, setCategory)}
                    value={cat}
                    className="w-3"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          <div className="bg-white mt-4 rounded-xl pl-5 py-3">
            <h5 className="h5 mb-4">Types</h5>
            <div className="flex flex-col gap-2 text-sm font-light">
              {["Topwear", "Bottomwear", "Winterwear"].map((cat) => (
                <label key={cat} className="flex gap-2 medium-14 text-gray-500">
                  <input
                    type="checkbox"
                    onChange={(e) => toggleFilter(e.target.value, setSubCategory)}
                    value={cat}
                    className="w-3"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          <div className="pl-5 py-3 mt-4 bg-white rounded-xl">
            <h5 className="h5 mb-4">Sort By</h5>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border border-slate-900/50 outline-none text-gray-500 medium-14 h-8 w-full rounded px-2"
            >
              <option value="relevant">Relevant</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        {/* rightside */}
        <div className="bg-primary p-4 rounded-l-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6 ">
            {getPaginatedProducts().length > 0 ? (
              getPaginatedProducts().map((product) => (
                <Item product={product} />
              ))
            ) : (
              <p>No products found for selected filters</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
