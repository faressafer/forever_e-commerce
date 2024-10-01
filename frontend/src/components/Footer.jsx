import React from "react";
import { assets } from "../assets/assets.js";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div className="">
          <img src={assets.logo} alt="" />
          <p className="w-full md:2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            commodi ut ullam quisquam maxime maiores sed saepe hic ea. Nostrum
            cum nobis obcaecati expedita. Enim non odio voluptatibus.
            Consequuntur, officia.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className=" flex flex-col gap-1 text-gray-600">
            <li className="">HOME</li>
            <li className="">ABOUT US</li>
            <li className="">Delivery</li>
            <li className="">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 ">GET IN TOUCH</p>
          <ul className=" flex flex-col gap-1 text-gray-600">
            <li className="">+1245785663</li>
            <li className="">contact@forever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center ">
          CopyRight 2024@ forever.com - All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
