import React from "react";
import heroImg from "../assets/hero.png";
import { BsFire } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="max-padd-container bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat h-[667px] max-xs:h-[750px] w-full mb-10 relative">
      <div className="bg-white p-3 rounded-2xl max-w-[233px] relative top-8 xl:top-12">
        <div className="relative">
          <img
            src={heroImg}
            height={211}
            width={211}
            alt=""
            className="rounded-3xl mb-3"
          />
          <span className="absolute top-1/2 left-1/2 flexCenter -translate-y-1/2 -translate-x-1/2 h-8 w-8 bg-secondary rounded-full curser-pointer">
            <span className="absolute h-full w-full rounded-full bg-white opacity-50 animate-ping">
              
              
            </span>
            <FaPlay className="text-sm relative left-[1px] text-white" />
          </span>
        </div>
        <p className=" text-[13px]">
          <b className="uppercase">Unlock</b> your best look, one click at a time. Your style upgrade
          starts here, shop today!
        </p>
      </div>
    
      <div className="mt-15 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20 max-w-[777px]">
        <div className="mb-7"><h5 className=" items-center gap-x-2 uppercase text-white bg-gray-500 p-2 medium-18 inline rounded-full">MODERN COLLECTION <BsFire className="inline text-orange-400 text-[20px]" /></h5></div>
        
        <h1 className="h1 font-[500] capitalize max-w-[722px]">Every <span className="hover:text-secondary cursor-pointer">click</span> brings you closer to perfection shop now!</h1>
        <div className="flex" >
          <Link className="bg-white text-xs font-medium pl-5 rounded-full flexCenter gap-x-2 group capitalize">
            Check Our modern Collection <FaArrowRight className="bg-secondary text-white rounded-full h-11 w-11 p-3 m-[3px] border border-white group-hover:-rotate-[20deg]
            transition-all duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
