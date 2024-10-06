import { useState } from "react";
import IconButton from "../basic-components/button/IconButton";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <div className="flex justify-between w-full h-[10%] px-4 py-4  items-center">
      <div className="flex w-[70%] gap-x-10 justify-start items-center">
        <div className="md:hidden flex flex-col justify-center items-center">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <MdMenu />
          </button>
          
        </div>
        <div className="flex justify-between items-center gap-x-3">
          <img src="logo1.png" alt="Logo" className="w-8" />
          <span className="text-md">headspace</span>
        </div>

        <div className="md:flex md:flex-row w-auto md:justify-around md:gap-x-6 hidden md:block">
          <p className="text-md hover:font-bold">For You</p>
          <p className="text-md hover:font-bold">For business</p>
          <p className="text-md hover:font-bold">Our plans</p>
          <p className="text-md hover:font-bold">Resources</p>
          <p className="text-md hover:font-bold">About</p>
        </div>
      </div>
      <div className="flex w-[50%] justify-end">
        <div className="md:flex md:flex-row w-auto md:justify-around items-center md:gap-x-6 ">
          <p className="text-md hover:font-bold hidden md:block">Help</p>
          <Link to={"/meditate"} className="text-md hover:font-bold cursor-pointer hidden md:block">My Headspace</Link>
          <IconButton
            className={
              "rounded-full md:w-fit w-full md:px-5 px-2 py-4 bg-blue-600 text-white font-bold"
            }
            title={"Try for free"}
          />
        </div>
      </div>
      
    </div>
    {showMenu && (
            <div className="flex flex-col justify-start items-start px-4 py-2 w-auto md:hidden gap-y-2 ">
              <p className="text-md hover:font-bold">For You</p>
              <p className="text-md hover:font-bold">For business</p>
              <p className="text-md hover:font-bold">Our plans</p>
              <p className="text-md hover:font-bold">Resources</p>
              <p className="text-md hover:font-bold">About</p>
              <p className="text-md hover:font-bold">Help</p>
              <Link to={"/meditate"} className="text-md hover:font-bold cursor-pointer">
                My Headspace
              </Link>
            </div>
          )}
    </>
    
  );
}
export default Navbar;
