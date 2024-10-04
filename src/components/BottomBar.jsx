import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function BottomBar() {
  const location = useLocation();
  const [active,setActive] = useState("meditate")

  if (location.pathname !== "/meditate" && location.pathname !== "/focus") {
    return null;
  }
  return (
    <div className="w-full md:h-[8%] h-[7%] flex justify-evenly fixed bottom-0 left-0 items-center border-t-2 bg-white">

      <Link to="/meditate" className={active==="meditate"?`border-t-2 border-orange-400 h-full flex justify-center items-center`:null} onClick={()=>setActive("meditate")}>Meditate</Link>
      <Link to="/focus" className={active==="focus"?`border-t-2 border-orange-400 h-full flex justify-center items-center`:null} onClick={()=>setActive("focus")}>Focus</Link>
    </div>
  );
}
export default BottomBar;
