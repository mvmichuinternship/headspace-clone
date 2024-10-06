import Bluebar from "../components/homepage-components/Bluebar";
import Homepage from "../components/homepage-components/Homepage";
import Navbar from "../components/homepage-components/Navbar";

function HomeLayout() {
  return (
    <div className="h-screen w-[100%]">
      <Bluebar />
      <Navbar />
      <Homepage />
    </div>
  );
}
export default HomeLayout;
