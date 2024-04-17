import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Sendlink from "../../atoms/Navbar/Sendlink";

export default function Navbar() {
  const [sideOpen, setSideOpen] = useState(false);

  function openSidebar() {
    setSideOpen(!sideOpen);
  }

  const [name, setName] = useState<string | any>("");

  const data: any = localStorage.getItem("signIn");
  const object = JSON.parse(data);

  useEffect(() => {
    const url = `https://api.safarovacademy.com/api/v1/account/${object?.userId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setName(data.username));
  }, []);

 

  return (
    <div>
      <div className=" flex justify-center align-middle">
        <div className="w-[85%] rounded-full bg-[#171719] xl:mx-8 lg:mx-8 md:mx-8 sm:mx-0 mt-8 xl:px-16 lg:px-16 md:px-12 sm:px-8 py-6 flex justify-between items-center">
          <div className=" xl:text-[27px] lg:text-[27px] md:text-2xl sm:text-2xl xl:font-bold sm:font-normal">
            <Link to={"/"}> safarov.</Link>
          </div>

          <div className="flex xl:block lg:block md:hidden sm:hidden text-[17px] font-medium text-[#C3C3C3] justify-between ">
            <Link className="mx-4" to="/blogs">
              Blogs
            </Link>
            <Link className="mx-4" to="/askquestion">
              Ask a question
            </Link>
            <Link className="mx-4" to="/">
              Who I'am
            </Link>
          </div>

          <Sendlink
            divStyle={"xl:block lg:block md:hidden sm:hidden"}
            arrowStyle={"-rotate-45 mr-2 text-[17px] text-white font-medium"}
            textLink={object == null ? "Let's join" : name}
            pathLink={object == null ? "/signin" : "/dashboard"}
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
        className={`border *: ${
          sideOpen ? "block" : "hidden"
        } h-fit w-screen z-10`}
      >
        Navbar
      </div>
    </div>
  );
}
