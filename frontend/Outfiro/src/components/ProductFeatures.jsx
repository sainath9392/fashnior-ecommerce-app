import React from "react";
import { TbArrowBackUp, TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
const ProductFeatures = () => {
  return (
    <section className="mt-8">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-primary py-4 px-4 gap-5 rounded-2xl">
          <div className="flex gap-3">
            <TbArrowBackUp className="text-5xl text-yellow-500" />
            <div>
              <h5 className="h5">Easy Return</h5>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                nisi ut veritatis.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <TbTruckDelivery className="text-5xl text-secondary" />
            <div >
              <h5 className="h5">Fast Delivery</h5>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                veritatis quod explicabo.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <RiSecurePaymentLine className="text-5xl text-red-500" />
            <div>
              <h5 className="h5">Secure Payment</h5>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ratione, voluptatum. Iure, perferendis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
