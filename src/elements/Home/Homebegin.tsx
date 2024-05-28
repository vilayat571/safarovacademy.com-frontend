import HomebeginImg from "../../components/Home/HomebeginImg";
import HomebeginText from "../../components/Home/HomebeginText";

const HomeBegin: React.FC = () => {
  return (
    <div className="w-full  grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
      <HomebeginText />
      <HomebeginImg />
    </div>
  );
};
export default HomeBegin;
