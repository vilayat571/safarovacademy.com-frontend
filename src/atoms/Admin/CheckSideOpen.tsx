import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Navbar/Logo";

const CheckSideOpen: React.FC<{ openSidebar: any; sideOpen: boolean }> = (
  props
) => {
  return (
    <div className="justify-center fixed z-20 right-2 w-full px-2 items-center xl:hidden lg:hidden md:block sm:flex">
      <div
        className="  bg-[#1F2025] px-10 py-3 w-full mb-8 
           justify-between items-center flex "
      >
        <Logo font="text-2xl" />

        {props.sideOpen ? (
          <FontAwesomeIcon
            onClick={props.openSidebar}
            className=" mr-2 text-xl cursor-pointer"
            icon={faClose}
          />
        ) : (
          <FontAwesomeIcon
            onClick={props.openSidebar}
            className=" mr-2 text-xl cursor-pointer"
            icon={faBars}
          />
        )}
      </div>
    </div>
  );
};

export default CheckSideOpen;
