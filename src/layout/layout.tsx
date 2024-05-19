import { useEffect } from "react";
import Footer from "../elements/Footer/Footer";
import Mainlay from "../elements/Layout/Mainlay";
import Navbar from "../elements/Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

function Layout(props: any) {
  const data: any = localStorage.getItem("signIn");
  const object = JSON.parse(data);

  const location = useLocation();

const navigate=useNavigate()

  useEffect(() => {
    !object?.username  && location.pathname == "/askquestion" && navigate("/")
  });

  return (
    <div className="tracking-wide">
      <Navbar />
      <Mainlay lay={props.children} />
      <Footer />
    </div>
  );
}

export default Layout;
