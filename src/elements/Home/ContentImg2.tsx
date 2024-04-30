import { Link } from "react-router-dom";
import Arrrow from "../../components/Navbar/Arrrow";
import imagefifth from "../../assets/images/imagefifth.png";

function ContentImg2() {
  return (
    <div className=" w-full mt-48 mb-32 gap-20 items-center grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <img
        src={imagefifth}
        className="col-span-1 flex justify-start w-[350px] xl:h-[250px] lg:h-[260px] md:h-[358px] sm:h-[200px]
        object-cover	"
        alt=""
      />

      <div className="col-span-1 flex justify-end">
        <div className="">
          <p
            className="text-[#FF9431] tracking-wider font-semibold
         xl:mb-4 md:mb-4 lg:mb-3 sm:mb-2 text-normal "
          >
            Useful blogs
          </p>
          <p
            className="xl:text-xl md:text-xl lg:text-xl sm:text-xl 
            text-white xl:mb-4 md:mb-4 lg:mb-4 tracking-wide leading-8 sm:mb-2 font-semibold"
          >
            Blogs based on more than
            <br />
            programming languages 
          </p>
          <div className="flex justify-end items-center">
            <p
              className=" xl:w-10/12 lg:w-full md:w-10/12 sm:w-[95%] tracking-wide leading-8
          xl:text-[20px] lg:text-lg md:text-[20px] sm:text-lg font-medium  text-[#c3c3c3]"
            >
               And more than 20 categories. Most importantly your career related
              to JavaScript, TypeScript, React, HTML, CSS and many frameworks
              etc. you can find blogs about
            </p>
          </div>

          <Link
            to="/"
            className="text-lg relative top-6
             
          "
          >
            Let's ask
            <Arrrow style="-rotate-45 ml-2 text-base text-white font-medium" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContentImg2;
