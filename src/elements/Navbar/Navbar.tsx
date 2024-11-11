import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sendlink from "../../components/Navbar/Sendlink";
import Logo from "../../atoms/Navbar/Logo";

export default function Navbar() {
  const [sideOpen, setSideOpen] = useState(false);

  function openSidebar() {
    setSideOpen(!sideOpen);
  }

  const data: string | null= localStorage.getItem("signIn");
  const object = data!=null && JSON.parse(data );



  return (
    <div>
      <div className=" flex justify-center align-middle tracking-wide">
        <div
          className="xl:w-[85%] lg:w-[85%] md:w-[85%] sm:w-[91%] rounded-full bg-[#1F2025]
         xl:mx-8 lg:mx-8 md:mx-8 sm:mx-0 mt-8 xl:px-16 lg:px-14 md:px-12 sm:px-8 py-4 flex justify-between items-center"
        >
          <Logo font="text-[27px]" />

          <div
            className="flex xl:block lg:block md:hidden sm:hidden text-normal
           tracking-wide text-[#C3C3C3] justify-between "
          >
            <Link className="mx-4 mb-2" to="/blogs">
              Bloqlar
            </Link>

            <Link className="mx-4 mb-2" to="/">
              Vilayət kimdir?
            </Link>

            <Link className="mx-4 mb-2" to="/">
              CV & Təcrübə
            </Link>
          </div>

          <Sendlink
            divStyle={
              "xl:block lg:block md:hidden sm:hidden text-normal leading-9 tracking-wide"
            }
            arrowStyle={"-rotate-45 mr-2 text-normal text-white font-medium"}
          />

          <div className=" xl:hidden lg:hidden md:block sm:block">
            <FontAwesomeIcon
              onClick={openSidebar}
              className=" mr-2 text-xl"
              icon={faBars}
            />
          </div>
        </div>
      </div>

      <div
        className={`*: ${
          sideOpen
            ? "flex justify-center  w-full bg-[#121316] h-screen fixed top-0 z-10"
            : "hidden"
        }`}
      >
        <div className=" w-11/12 relative top-10">
          <div
            className=" bg-[#171719] m outline-none flex justify-between items-center
         py-6 px-8 mb-6  rounded-full "
          >
            <Link
              to={"/"}
              className="text-[27px] font-semibold tracking-wider leading-9"
            >
              safarov
            </Link>
            <button>
              <FontAwesomeIcon
                onClick={openSidebar}
                className=" text-2xl"
                icon={faTimes}
              />
            </button>
          </div>
          <div className="grid grid-cols-1 mx-5 text-xl">
            <Link className="mx-4 mb-2" to="/blogs">
              Blogs
            </Link>
            <Link
              className={`mx-4 mb-2 ${
                object?.username ? "text-[#C3C3C3]" : "text-[#888888] 	"
              }`}
              to={`${object?.username ? "/askquestion/myquestions" : "/"}`}
            >
              Ask a question
            </Link>
            <Link className="mx-4 mb-2"  to="/">
              Who I'am
            </Link>

            <Sendlink
              divStyle={
                "xl:hidden lg:hidden md:block sm:block mx-4  text-normal leading-9 tracking-wide"
              }
              arrowStyle={"-rotate-45 mr-1 text-normal text-white font-medium"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
