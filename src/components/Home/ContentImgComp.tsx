import { Link } from "react-router-dom";
import Arrrow from "../../components/Navbar/Arrrow";
import { ContentInterface } from "../../elements/Home/ContentImg";

function ContentImgComp(props: ContentInterface) {
  return (
    <div className="col-span-1">
      <p
        className="text-[#ff9634] tracking-wide 
         mb-3 font-semibold leading-9 text-xl"
      >
        {props.header}
      </p>
      <p
        className="text-xl
         text-white mb-4  tracking-wider "
      >
        {props.description1}
        <br />
        {props.description2}
      </p>
      <div className="flex justify-start items-center">
        <p
          className="xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-[95%] tracking-wide leading-8
          text-lg font-normal  text-[#c3c3c3]"
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
