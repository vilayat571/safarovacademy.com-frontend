import ContentImg from "../../components/Home/ContentImg";
import ContentImg2 from "../../components/Home/ContentImg2";
import Homebegin from "../../components/Home/Homebegin";
import Imageinfo from "../../components/Home/Imageinfo";
import Offer from "../../components/Home/Offer";
import Layout from "../../layout/layout";

function App() {
  return (
    <Layout>
      <Homebegin />
      <Imageinfo />
      <Offer />
      <ContentImg />
      <ContentImg2 />
    </Layout>
  );
}

export default App;