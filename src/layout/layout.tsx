import Footer from "../elements/Footer/Footer";
import Mainlay from "../elements/Layout/Mainlay";
import Navbar from "../elements/Navbar/Navbar";

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
