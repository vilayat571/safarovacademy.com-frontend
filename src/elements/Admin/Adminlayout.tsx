import { Link, useNavigate } from "react-router-dom";
import Logo from "../../atoms/Navbar/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons/faUserCheck";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

function Adminlayout(props: Props) {
  const navigate = useNavigate();

  const data: any = localStorage.getItem("signIn");
  const object = JSON.parse(data);

  function SignOut() {
    const res = confirm("Do you want to log out?");
    if (res) {
      localStorage.removeItem("signIn");
      navigate("/");
    }
  }
  const [sideOpen, setSideOpen] = useState(false);


  function openSidebar() {
    setSideOpen(!sideOpen);
  }

  return (
    <div className="flex justify-between h-screen">
        <div className="justify-center fixed z-20 right-2 w-full px-2 items-center xl:hidden lg:hidden md:block sm:flex">
        <div className="  bg-[#1F2025] px-10 py-3 w-full mb-8 
           justify-between items-center flex ">
           <Logo font="text-2xl" />

            {
              sideOpen ? <FontAwesomeIcon
              onClick={openSidebar}
              className=" mr-2 text-xl cursor-pointer"
              icon={faClose}
            /> : <FontAwesomeIcon
              onClick={openSidebar}
              className=" mr-2 text-xl cursor-pointer"
              icon={faBars}
            />
              }
          </div>
        </div>
        
      <div className=" xl:block md:hidden lg:block sm:hidden w-1/5 border-r border-[#747474]  py-12 p-8">
        <div className="pt-4">
          <div className="mb-8">
            <Logo font="text-2xl" />
          </div>
          <div className="text-lg mb-3 flex items-center ">
            <FontAwesomeIcon className="mr-1 text-sm" icon={faUserCheck} />

            {object?.username}
          </div>

          <Link to={"/"} className="block text-lg mb-3">
            Home
          </Link>
          <Link to={"/askquestion/myquestions"} className="block text-lg mb-3">
            My questions
          </Link>
          <Link to={"/askquestion"} className="text-lg mb-3">
            Ask question
          </Link>
        </div>
        <div className=" absolute bottom-12">
          <button
            className="border px-3 py-2 rounded-sm"
            onClick={() => SignOut()}
          >
            Sign out
          </button>
        </div>
      </div>

      {
        sideOpen ?         
        <div className=" w-full xl:hidden md:block lg:hidden sm:block absolute top-0 bg-[#1F2025] h-screen z-10 pl-10">
          <div className="pt-4 relative top-12">
          
            <div className="text-lg mb-3 flex items-center ">
              <FontAwesomeIcon className="mr-1 text-sm" icon={faUserCheck} />
  
              {object?.username}
            </div>
  
            <Link to={"/"} className="block text-lg mb-3">
              Home
            </Link>
            <Link to={"/askquestion/myquestions"} className="block text-lg mb-3">
              My questions
            </Link>
            <Link to={"/askquestion"} className="text-lg mb-3">
              Ask question
            </Link>
            <button
              className="border block mt-5 px-3 py-2 rounded-sm"
              onClick={() => SignOut()}
            >
              Sign out
            </button>
          </div>
        
        </div> : ''
      }
      
      {props.children}
    </div>
  );
}

export default Adminlayout;
