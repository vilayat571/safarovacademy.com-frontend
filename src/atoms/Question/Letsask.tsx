import { Link } from "react-router-dom";

const Letsask = () => {
  return (
    <div className="w-full  text-center flex justify-center items-center">
      <div>
        <p className="text mb-1 text-[#cfcfcf]">
          You haven't asked any questions yet
        </p>
        <Link
          to="/askquestion"
          className="text-lg font-semibold tracking-wider leading-9"
        >
          Let's ask {":)"}
        </Link>
      </div>
    </div>
  );
};

export default Letsask;
