import ContentImg from "../../components/Home/ContentImg";
import ContentImg2 from "../../components/Home/ContentImg2";
import Homebegin from "../../components/Home/Homebegin";
import Imageinfo from "../../components/Home/Imageinfo";
//import Myblogs from "../../components/Home/Myblogs";
import Offer from "../../components/Home/Offer";
import Layout from "../../layout/layout";

function App() {
  return (
    <Layout>
      <div>
        <Homebegin />
        <Imageinfo />
        <Offer />
        <ContentImg />
        <ContentImg2 />
        {/* <Myblogs /> */}
      </div>
    </Layout>
  );
}

export default App;
