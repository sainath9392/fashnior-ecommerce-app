import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import bannerImg from "../assets/banner.png"

const Banner = () => {
  return (
    <section className="bg-[url(/src/assets/banner.png)] max-padd-container bg-right bg-no-repeat pt-20 pb-20 bg-contain  mx-auto">
      <div>
        <div>
          <h2 className="h2 uppercase hidden lg:block ">affordable style, timeless appeal</h2>
          <h3 className="h3 text-secondary uppercase">
            Transform your closet today
          </h3>
          <div className="flex">
            <Link to={"/collection"} className="bg-secondary text-xs font-medium pl-5 rounded-full flexCenter gap-x-2 group capitalize text-white">
              Explore Collection{" "}
              <FaArrowRight
                className="bg-white text-secondary rounded-full h-11 w-11 p-3 m-[3px] border border-white group-hover:-rotate-[20deg]
            transition-all duration-500"
              />
            </Link>
          </div>
        </div>
        <div>
          <div ></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
