import { Link } from "react-router-dom";
import Arrrow from "../../atoms/Navbar/Arrrow";
import myCV from '../../assets/images/Vilayat_Safarov_CV.pdf'

function Homebegin() {
  return (
    <div className="w-full  grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
      <div className="col-span-2 h-[400px]">
        <p className="text-[29px] relative top-3 tracking-wider font-thin mb-4 ">
          Hi there 👋 I am
        </p>
        <div className="xl:text-[90px] md:text-[90px] lg:text-[90px] sm:text-[70px] font-bold">
          <div className=" ">Vilayat</div>
          <div className=" relative bottom-6">Safarov</div>
        </div>
        <p className="font-light text-lg relative bottom-4">
          Software developer with
          <br />
          UI\UX design skills
        </p>

        <div>
          <Link to={myCV} target="blank" className="relative top-5 px-8 py-3 rounded-full text-base border-[1px] border-white ">
            Check out my CV
            <Arrrow style={"-rotate-45 ml-[2px] mt-[3px] text-base "} />
          </Link>
        </div>
      </div>

      <div className="col-span-2 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-16 flex xl:justify-end lg:justify-end md:justify-start sm:justify-start ">
        <img
          className=""
          src="https://cdn3d.iconscout.com/3d/premium/thumb/react-performance-analysis-4633927-3872272.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Homebegin;
