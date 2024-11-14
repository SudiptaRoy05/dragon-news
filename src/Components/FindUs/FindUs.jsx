import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


export default function FindUs() {
  return (
    <div>
      <h2 className="font-semibold">Find Us On</h2>
      <div className="mt-3 ml-5 border border-gray-500 rounded-lg font-semibold text-gray-500">
        <div className=" border-b border-gray-500 rounded-t-lg py-4 pl-10 hover:bg-base-300">
          <a className="w-full flex items-center gap-2">
            <span>
              <FaFacebook></FaFacebook>
            </span>
            <span>Facebook</span>
          </a>
        </div>
        <div className="border-b py-3 pl-10 border-gray-500 hover:bg-base-300">
          <a className="w-full flex items-center gap-2">
            <span>
              <FaSquareXTwitter></FaSquareXTwitter>
            </span>
            <span>Twitter</span>
          </a>
        </div>
        <div className=" py-3 pl-10 hover:bg-base-300 rounded-b-lg">
          <a className="w-full flex items-center gap-2">
            <span>
              <FaInstagramSquare></FaInstagramSquare>
            </span>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}
