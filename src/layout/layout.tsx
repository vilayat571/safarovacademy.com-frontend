import { ReactNode, useEffect } from "react";
import Footer from "../elements/Footer/Footer";
import Mainlay from "../elements/Layout/Mainlay";
import Navbar from "../elements/Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

type IProps = {
  children: ReactNode;
};

const Layout: React.FC<IProps> = (props) => {
  const data: any = localStorage.getItem("signIn");
  const object = JSON.parse(data);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    !object?.username && location.pathname == "/askquestion" && navigate("/");
    window.scrollTo(0, 0);
    console.clear();
    document.onkeydown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key == "I") {
        e.preventDefault();
      }
    };
  });

  return (
    <div className="tracking-wide">
      <Navbar />
      <Mainlay lay={props.children} />
      <Footer />
    </div>
  );
};

export default Layout;
