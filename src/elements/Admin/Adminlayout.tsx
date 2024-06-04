// yaxsi seo yazmaq lazimdir
// logo lazimdir
// visible invisible
// responsivliye diqqet et
// logo

import { Link, useNavigate } from "react-router-dom";
import Logo from "../../atoms/Navbar/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons/faUserCheck";
import { useState } from "react";
import CheckSideOpen from "../../atoms/Admin/CheckSideOpen";
import SEO from "../../SEO/SEO";

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
  const [sideOpen, setSideOpen] = useState<boolean>(false);

  function openSidebar() {
    setSideOpen(!sideOpen);
  }

  return (
    <>
      <SEO
        title={`${object?.username}'s dashboard
    `}
        description="Learn new things and improve your skills with great articles.  Find the latest of my writing here. The more your read the more you learn 👌"
        name="’Safarov Academy’"
        type="article"
      />
      <div className="flex justify-between h-screen">
        <CheckSideOpen openSidebar={openSidebar} sideOpen={sideOpen} />

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
            <Link
              to={"/askquestion/myquestions"}
              className="block text-lg mb-3"
            >
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

        {sideOpen ? (
          <div className=" w-full xl:hidden md:block lg:hidden sm:block absolute top-0 bg-[#1F2025] h-screen z-10 pl-10">
            <div className="pt-4 relative top-12">
              <div className="text-lg mb-3 flex items-center ">
                <FontAwesomeIcon className="mr-1 text-sm" icon={faUserCheck} />

                {object?.username}
              </div>

              <Link to={"/"} className="block text-lg mb-3">
                Home
              </Link>
              <Link
                to={"/askquestion/myquestions"}
                className="block text-lg mb-3"
              >
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
          </div>
        ) : (
          ""
        )}

        {props.children}
      </div>
    </>
  );
}

export default Adminlayout;
