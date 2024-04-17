import { Link } from "react-router-dom";
import Arrrow from "../../atoms/Navbar/Arrrow";
import imagethird from "../../assets/images/imagethird.png";

function ContentImg() {
  return (
    <div className=" w-full mt-48 mb-32  grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div className="col-span-1">
        <p
          className="text-[#FF9431] tracking-wider font-semibold
         xl:mb-4 md:mb-4 lg:mb-6 sm:mb-2 text-lg"
        >
          Ask a question
        </p>
        <p
          className="xl:text-2xl md:text-2xl lg:text-2xl sm:text-xl 
         text-white xl:mb-4 md:mb-4 lg:mb-8 tracking-wider leading-9 sm:mb-2 font-semibold"
        >
          I am blogging
          <br />
          based on my experience
        </p>
        <div className="flex justify-start items-center">
          <p
            className="xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-[95%] tracking-wide leading-9
          xl:text-[20px] lg:text-[22px] md:text-[20px] sm:text-lg font-normal  text-[#c3c3c3]"
          >
             But I'm also improving my skills by answering questions. So I think
            that if someone is helping someone else, it's an investment in
            themselves. Let us know if you have any questions
          </p>
        </div>

        <Link
          to="/"
          className=" text-lg relative top-10
             
          "
        >
          Let's ask
          <Arrrow style="-rotate-45 ml-2 text-base text-white font-medium" />
        </Link>
      </div>

      <div className="col-span-1 flex justify-end xl:mt-0 lg:mt-0 md:mt-0 sm:mt-32 ">
        <img
          src={imagethird}
          className="w-[418px] xl:h-[358px] lg:h-[358px] md:h-[358px] sm:h-[300px] object-cover	"
          alt=""
        />
      </div>
    </div>
  );
}

export default ContentImg;
