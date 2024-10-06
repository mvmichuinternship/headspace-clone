// import Card from "./basic-components/Card";
import Card from "../basic-components/card/Card";
import IconButton from "../basic-components/button/IconButton";
import Subheading from "../basic-components/Subheading";

function Homepage() {
  return (
    <div className="h-full bg-stone-50 md:flex md:flex-row flex flex-col w-full md:justify-between justify-center items-center px-2 gap-x-10">
      <img
        src="https://images.ctfassets.net/v3n26e09qg2r/4D9CSEOzzm4zjCdPbmkFKE/927da3b4c128c841bb0abb4a16747f9e/Hero_Image_Left.webp?fm=webp&w=3840&q=75"
        alt=""
        className="md:h-[525px] md:w-[596px] hidden md:block"
      />
      <img
        src="https://images.ctfassets.net/v3n26e09qg2r/4NqNkoUd0hvoIvsRJrm2bS/50490f004b2a68e044e305e25c0da38a/Hero_Mobile_Image.webp?fm=webp&w=3840&q=75"
        alt=""
        className="h-[592px] w-[492px] md:hidden block"
      />
      <div className="flex flex-col w-full justify-center items-center gap-y-8">
        <span className="md:text-6xl text-4xl font-bold text-stone-700 leading-tight">
          Make it your year with Headspace
        </span>
        <Card
          cardType={"basic"}
          headingText={"Free for 14 days, then ₹1499/year"}
          subHeadingText={"₹124.92 per month, billed annually"}
          className={"w-full"}
        />
        <Subheading className={"text-stone-700"} text="After your free trial, the annual subscription is ₹1499 INR and automatically renews each year. Are you a post-secondary or university student? Save 85%, with valid SheerID student verification, for our Student plan"/>
        <IconButton
          className={"rounded-full md:w-fit w-[55%] px-5 py-4 bg-blue-600 text-white font-bold"}
          title={"Try for free"}
        />
      </div>

      <img
        src="https://images.ctfassets.net/v3n26e09qg2r/3Ciub8Qc1UhiOVboAfmazR/0a0737be4b3eabc7d9c9c0d00e9f94f7/Hero_Right_Image_Default-2022.png?fm=webp&w=3840&q=75"
        alt=""
        className="md:h-[525px] md:w-[596px] hidden md:inline"
      />
    </div>
  );
}
export default Homepage;
