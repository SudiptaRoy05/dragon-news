import React from "react";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="flex items-center justify-center flex-col pt-6 space-y-5">
      <div>
        <img className="w-96" src={logo} alt="" />
      </div>
      
        <p className="text-xl text-gray-400">Journalism Without Fear or Favour</p>
        <p className="font-semibold text-gray-500">Sunday, November 27, 2025</p>
      
    </div>
  );
}
