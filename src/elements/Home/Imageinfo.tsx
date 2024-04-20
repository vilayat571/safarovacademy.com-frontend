import ImageinfoImg from "../../components/Home/ImageinfoImg";
import ImageinfoText from "../../components/Home/ImageinfoText";

function Imageinfo() {
  return (
    <div className=" w-full  mb-64 xl:mt-64 lg:mt-64 md:mt-64 sm:mt-20 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <ImageinfoText />
      <ImageinfoImg />
    </div>
  );
}

export default Imageinfo;
