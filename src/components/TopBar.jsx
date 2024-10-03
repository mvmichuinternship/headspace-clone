import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";


function TopBar() {
  const location = useLocation();
  const [isSearch, setIsSearch] = useState(false)

  if (location.pathname === "/") {
    return null;
  }
  return (
    <div className="p-5  bg-white w-full flex flex-col justify-center gap-y-3">
<div className="w-full  flex justify-between items-center">
      <div className="">
        <span className="" onClick={()=>{setIsSearch(!isSearch)}}><IoSearchOutline/></span>
        
      </div>
      <div className="flex justify-between items-center gap-x-2">
          <img src="logo1.png" alt="Logo" className="w-8" />
          <span className="text-2xl font-stone-600">headspace</span>
        </div>
        <div>
          <span>Mridula V</span>
        </div>
    </div>
    {isSearch && 
          <input type="text" className="border border-neutral-100 w-full" />
        }
    </div>
    
  );
}
export default TopBar;
