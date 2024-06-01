import { Link } from "react-router-dom";
import Arrrow from "../Navbar/Arrrow";
import ImgInfocmp from "../../atoms/Home/ImgInfocmp";

function ImageinfoImg() {
  return (
    <div className="col-span-1 relative xl:top-8 md:top-8 lg:top-8 sm:top-16 xl:pl-20 lg:pl-20 md:pl-20 sm:pl-1">
      <ImgInfocmp />

      <Link
        to="/"
        className=" px-6 py-3 relative text-base top-12 
         
      rounded border-[1px] border-white"
      >
        Learn more
        <Arrrow style="-rotate-45 ml-2 text-base text-white font-medium" />
      </Link>
    </div>
  );
}

export default ImageinfoImg;
