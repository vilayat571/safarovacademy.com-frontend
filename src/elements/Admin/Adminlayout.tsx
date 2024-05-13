import { Link, useNavigate } from "react-router-dom";
import Logo from "../../atoms/Navbar/Logo";

interface Props {
  children: React.ReactNode;
}

function Adminlayout(props: Props) {
  const navigate = useNavigate();

  const data: any = localStorage.getItem("signIn");
  const object = JSON.parse(data);

  function SignOut() {
    localStorage.removeItem("signIn");

    navigate("/");
  }

  return (
    <div className="flex justify-between h-screen">
      <div className="w-1/5 border-r border-[#747474]  py-12 p-8">
        <div className="pt-4">
          <div className="mb-8">
            <Logo font="text-2xl" />
          </div>
          <div className="text-lg mb-3 capitalize">{object?.username}</div>

          <Link to={"/askquestion"} className="block text-lg mb-3">
            Home
          </Link>
          <Link to={"/askquestion/myquestions"} className="block text-lg mb-3">
            My questions
          </Link>
          <Link to={"/askquestion"} className="text-lg mb-3">
            Ask question
          </Link>
        </div>
        <div className=" absolute bottom-12 text-lg">
          <button onClick={() => SignOut()}>Log out</button>
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default Adminlayout;
