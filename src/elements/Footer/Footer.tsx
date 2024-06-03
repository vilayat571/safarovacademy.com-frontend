import { Link } from "react-router-dom";
import Arrrow from "../../components/Navbar/Arrrow";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Counter from "../../atoms/Footer/Visitorcount";
import IconP from "./IconP";

function Footer() {
  return (
    <div className="mt-32 mb-0 flex justify-center items-center  ">
      <div
        className="bg-[#171719] w-[84%] rounded-xl 
      grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1
      xl:px-16 lg:px-16 md:px-16 sm:px-8 xl:py-12 lg:py-12 md:py-12 sm:py-8
      "
      >
        <div
          className="col-span-1
         xl:mb-0 lg:mb-0 md:mb-0 sm:mb-8 "
        >
          <div className="text-[32px] font-semibold">
            <Link to={"/"}> safarov.</Link>
          </div>
          <div className="mt-12 font-medium text-xl text-[#C3C3C3]  ">
            <Link className="mb-3 block" to="/blogs">
              Blogs
            </Link>

            <Link className="mb-3 block" to="/signin">
              Sign in
            </Link>
            <Link className="mb-3 block" to="/signup">
              Sign up
            </Link>
            <Link className="mb-3 block" to="/">
              Who I'am
            </Link>

            <Link className="mb-3 block" to="/askquestion">
              Ask a question
            </Link>

            <Link
              target="blank"
              className="mt-16 block text-lg"
              to="https://github.com/vilayat571"
            >
              Powered by <span className="underline">Vilayat Safarov</span>
            </Link>
            <Counter />
          </div>
        </div>

        <div className="col-span-1 ">
          <div
            className="xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-xl
             xl:font-semibold md:font-semibold lg:font-semibold sm:font-normal tracking-wide text-white 
          mt-6  flex justify-start "
          >
            <div
              className="xl:w-3/4 md:w-3/4 lg:w-3/4 sm:w-full tracking-wider
            xl:leading-9 lg:leading-9 md:leading-9 sm:leading-5 
            "
            >
              Already have a design in mind? Or want me to take care of
              everything? Let’s chat and find out what’s best for you!
            </div>
          </div>

          <div
            className="mt-8 
            "
          >
            <p className="mb-2">
              <Link to="/signin" className="text-xl">
                <Arrrow style="-rotate-45 mr-2 text-normal text-white font-medium" />
                Let's connect
              </Link>
            </p>

            <IconP
              text="Linkedin"
              link="https://www.linkedin.com/in/vilayat-safarov-1a3b58249/"
              icon={faLinkedin}
            />
            <IconP
              text="Github"
              link="https://github.com/vilayat571"
              icon={faGithub}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
