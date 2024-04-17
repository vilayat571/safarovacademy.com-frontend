import { Link } from "react-router-dom";
import myImg from "../../assets/images/profile.jpeg";
import Arrrow from "../../atoms/Navbar/Arrrow";

function Imageinfo() {
  return (
    <div className=" w-full  mb-64 xl:mt-64 lg:mt-64 md:mt-64 sm:mt-20 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div className="col-span-1">
        <img
          src={myImg}
          className="w-[530px] xl:h-[586px] lg:h-[586px] md:h-[586px] sm:h-[400px] object-cover	rounded-[20px]"
          alt=""
        />
      </div>
      <div className="col-span-1 relative xl:top-8 md:top-8 lg:top-8 sm:top-16 xl:pl-20 lg:pl-20 md:pl-20 sm:pl-1">
        <p className="xl:text-3xl md:text-3xl lg:text-3xl sm:text-[20px] font-semibold text-white">
          Who I’m 🤨
        </p>
        <p className="xl:text-3xl md:text-3xl lg:text-3xl sm:text-[20px] font-normal xl:mt-12 md:mt-12 lg:mt-12 sm:mt-6 text-white">
          Someone who loves his job and helping people make the world a better
          place.
        </p>
        <p className="xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[18px] font-normal xl:mt-12 md:mt-12 lg:mt-12 sm:mt-6 text-[#c3c3c3]">
          I believe that a well designed website has the power to leave a
          lasting impression. With years of experience in the industry, I’ve had
          the privilege of working with diverse clients, helping them achieve
          their goals.
        </p>

        <Link
          to="/"
          className=" px-6 py-3 relative text-base top-12 
             
          rounded border-[1px] border-white"
        >
          Learn more
          <Arrrow style="-rotate-45 ml-2 text-base text-white font-medium" />
        </Link>
      </div>
    </div>
  );
}

export default Imageinfo;
