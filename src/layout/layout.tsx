import Footer from "../components/Footer/Footer";
import Mainlay from "../components/Layout/Mainlay";
import Navbar from "../components/Navbar/Navbar";

function Layout(props: any) {
  return (
    <div className="tracking-wide">
      <Navbar />
      <Mainlay lay={props.children} />
      <Footer />
    </div>
  );
}

export default Layout;
