import { Link } from "react-router-dom";
import Arrrow from "../Navbar/Arrrow";
import myCV from "../../assets/images/vilayat_safarov_cv.pdf";
import waving from "../../assets/images/wawing-emoji.png";

function HomebeginText() {
  return (
    <div className="col-span-2 relative top-20">
      <p className="text-[29px] relative top-3 ml-1 tracking-wider font-thin mb-4 ">
        Salam{" "}
        <img
          src={waving}
          className="w-8 inline"
          alt="Vilayat waves to everybody"
        />{" "}
        Mən
      </p>
      <div className="xl:text-[90px] md:text-[90px] leading-[120px] lg:text-[90px] sm:text-[70px] font-bold">
        <div className=" ">Vilayət</div>
        <div className=" relative bottom-6">Səfərov</div>
      </div>
      <p className="f text-lg ml-1 relative bottom-4">
        MERN stack sahəsində ixtisaslaşmış <br /> UI/UX dizayn bacarıqlarına
        sahib <br />
        <span className="text-semibold">{"<Software developer>"}</span>
      </p>

      <div>
        <Link
          to={myCV}
          target="blank"
          className="relative top-5 px-8 py-3 rounded-[4px] text-base border-[1px] border-white "
        >
          Təcrübə & CV
          <Arrrow style={"-rotate-45 ml-[2px] mt-[3px] text-base "} />
        </Link>
      </div>
    </div>
  );
}

export default HomebeginText;
