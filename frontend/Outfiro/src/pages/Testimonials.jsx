import React from "react";
import Title from "../components/Title";
import { FaCheck, FaStar } from "react-icons/fa6";
import user1 from "../assets/testimonials/user1.png";
import user2 from "../assets/testimonials/user2.png";
import product1 from "../assets/product_1.png";
import product2 from "../assets/product_2_1.png";
import product3 from "../assets/product_3.png";
import product4 from "../assets/product_6.png";
import Footer from "../components/Footer";

const Testimonials = () => {
  return (
    <div>
      <div className="bg-primary mb-16">
        {/* container */}
        <div className="max-padd-container py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-20 mb-16 rounded-2xl">
            {/* left side */}
            <div className="flex items-start justify-between flex-col gap-10">
              <Title
                title1={"What people"}
                title2={"Says"}
                title1Styles={"pb-10"}
                paraStyles={"!block"}
              />
              <div className="flex flex-col gap-1 bg-white p-2 rounded">
                <div className="flex text-secondary gap-2 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  more than <b>25,000 reviews</b>
                </div>
              </div>
            </div>
            {/* Right Side - reviews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {/* Review Card */}
              <div className="flex flex-col gap-1 rounded-lg p-4 bg-white">
                <div className="flexBetween">
                  <div className="flexCenter gap-x-2">
                    <img
                      src={user1}
                      alt="userimg"
                      height={44}
                      width={44}
                      className="rounded-full"
                    />
                    <h5 className="bold-14">john Doe</h5>
                  </div>
                  <div className="flexCenter bg-secondary text-white rounded-full gap-x-2 p-1 px-2 text-xs font-semibold">
                    <FaCheck />
                    Verified
                  </div>
                </div>
                <hr className="h-[1px] w-full my-2 text-gray-300" />
                <div className="flex gap-x-1 text-secondary mt-5 mb-1 text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4 className="h4">high Quality</h4>
                <p >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit eaque earum quaerat id sunt vitae obcaecati eius
                  provident illo ad accusantium veniam fugiat, labore commodi.
                </p>
                <div className="flex gap-x-1 mt-5">
                  <img
                    src={product1}
                    alt="product1img"
                    height={44}
                    width={44}
                    className="rounded aspect-square object-cover"
                  />
                  <img
                    src={product2}
                    alt="product2img"
                    height={44}
                    width={44}
                    className="rounded aspect-square object-cover"
                  />
                  
                </div>
              </div>
             
              {/* Review Card */}
              <div className="flex flex-col gap-1 rounded-lg p-4 bg-white">
                <div className="flexBetween">
                  <div className="flexCenter gap-x-2">
                    <img
                      src={user2}
                      alt="userimg"
                      height={44}
                      width={44}
                      className="rounded-full"
                    />
                    <h5 className="bold-14">Celina Gomez</h5>
                  </div>
                  <div className="flexCenter bg-secondary text-white rounded-full gap-x-2 p-1 px-2 text-xs font-semibold">
                    <FaCheck />
                    Verified
                  </div>
                </div>
                <hr className="h-[1px] w-full my-2 text-gray-300" />
                <div className="flex gap-x-1 text-secondary mt-5 mb-1 text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4 className="h4">Modern Design</h4>
                <p >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit eaque earum quaerat id sunt vitae obcaecati eius
                  provident illo ad accusantium veniam fugiat, labore commodi.
                </p>
                <div className="flex gap-x-1 mt-5">
                  
                  <img
                    src={product3}
                    alt="product3img"
                    height={44}
                    width={44}
                    className="rounded aspect-square object-cover"
                  />
                  <img
                    src={product4}
                    alt="product4img"
                    height={44}
                    width={44}
                    className="rounded aspect-square object-cover"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
