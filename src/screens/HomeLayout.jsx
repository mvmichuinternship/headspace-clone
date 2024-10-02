import Bluebar from "../components/Bluebar";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";

function HomeLayout(){
    return(
        <div className="h-screen w-[100%]">
             <Bluebar/>
      <Navbar/>
      <Homepage/>
        </div>
    )
}
export default HomeLayout;