import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";

export default function Header() {
  return (
    <div className="flex items-center justify-center flex-col pt-6 space-y-3">
      <div>
        <img className="w-96" src={logo} alt="" />
      </div>
      
        <p className="text-xl  text-gray-400">Journalism Without Fear or Favour</p>
        <p className="font-semibold text-gray-500">{moment().format('LLLL')}</p>
      
    </div>
  );
}
