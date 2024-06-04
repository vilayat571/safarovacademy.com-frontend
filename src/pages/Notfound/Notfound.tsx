import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../SEO/SEO";

function Notfound() {
  const { pathname }: any = useLocation();

  return (
    <>
      <SEO
        title="404"
        description={`There is no information about ${pathname}`}
        name="’Safarov Academy’"
        type="infographic"
      />
      <div className=" w-full h-screen flex justify-center items-center">
        <div className="text-center  ">
          <p className="xl:text-[130px] lg:text-[130px] md:text-[130px] sm:text-[110px] font-bold block">
            404
          </p>
          <p className=" text-base text-[#c3c3c3] font-light  block">
            <span className="text-white"> `{pathname}`</span> is not a page on
            safarovacademy.com
          </p>
          <p className="mt-3 text=base">
            <FontAwesomeIcon
              className="-rotate-45 mr-2 text-base"
              icon={faArrowRight}
            />
            <Link to="/">Back to overview</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Notfound;
