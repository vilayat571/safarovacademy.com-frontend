import HomebeginImg from "../../atoms/Home/HomebeginImg";
import HomebeginText from "../../atoms/Home/HomebeginText";

function Homebegin() {
  return (
    <div className="w-full  grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
      <HomebeginText />
      <HomebeginImg />
    </div>
  );
}

export default Homebegin;
