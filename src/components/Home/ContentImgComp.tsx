import { Link } from "react-router-dom";
import Arrrow from "../../components/Navbar/Arrrow";
import { ContentInterface } from "../../elements/Home/ContentImg";

function ContentImgComp(props: ContentInterface) {
  return (
    <div className="col-span-1">
      <p
        className="text-[#ff9634] tracking-wide 
         mb-5 font-semibold leading-9 text-xl"
      >
        {props.header}
      </p>
      <p
        className="xl:text-[27px] md:text-[27px] lg:text-[27px] sm:text-xl font-semibold
         text-white xl:mb-4 md:mb-4 lg:mb-8 tracking-wide leading-10 sm:mb-2 "
      >
        {props.description1}
        <br />
        {props.description2}
      </p>
      <div className="flex justify-start items-center">
        <p
          className="xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-[95%] tracking-wide leading-9
          xl:text-[20px] lg:text-[22px] md:text-[20px] sm:text-lg font-normal  text-[#c3c3c3]"
        >
          {props.body}
        </p>
      </div>

      <Link
        to={props.path}
        className=" text-lg relative top-10
             
          "
      >
        {props.link}
        <Arrrow style="-rotate-45 ml-2 text-base text-white font-medium" />
      </Link>
    </div>
  );
}

export default ContentImgComp;
