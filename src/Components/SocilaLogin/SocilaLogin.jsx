import { IoLogoGoogle } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

export default function SocilaLogin() {
  return (
    <div className="">
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="flex flex-col items-center space-y-3 p-3">
        <button className="btn w-full">
          <span className="text-xl"><IoLogoGoogle /></span> Login With Google
        </button>
        <button className="btn w-full">
          <span className="text-xl"><IoLogoGithub /></span> Login With GitHub
        </button>
      </div> 
    </div>
  );
}


