import React from "react";
import upload_icon from '../assets/upload_icon.png'

const Add = () => {
  return (
    <div>
      <div>
        <form>
          <div className="w-full">
            <h5 className="h5">Product Name</h5>
            <input
              type="text"
              placeholder="Write here..."
              className="px-3 py-1.5 ring-1 ring-slate-500/10 rounded bg-white mt-1 w-full max-w-lg"
            />
          </div>
          <div className="w-full">
            <h5 className="h5">Product Description</h5>
            <textarea
              type="text"
              placeholder="Write here..."
              className="px-3 rows-5 py-1.5 ring-1 ring-slate-500/10 rounded bg-white mt-1 w-full max-w-lg"
            />
          </div>
          {/* Categories */}
          <div>
            <div>
              <div>
                <div>
                  <h5>Category</h5>
                  <select className="">
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                  </select>
                </div>
                <div>
                  <h5>Sub Category</h5>

                  <select className="">
                    <option value="Topwear">Topwear</option>
                    <option value="Bottomwear">Bottomwear</option>
                    <option value="Winterwear">Winterwear</option>
                  </select>
                </div>
              </div>
              <div>
                <h5>Product Price</h5>
                <input type="number" placeholder="10" className="px-3 py-2" />
              </div>
            </div>
          </div>
          <div>
            <h5>Product Sizes</h5>
            <div>
              <div>
                <span>S</span>
              </div>
            </div>
            {/* {Image} */}
            <div>
              <label htmlFor=""></label>
              <img src={upload_icon} alt="productImg" className="w-16 h-16 as" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
