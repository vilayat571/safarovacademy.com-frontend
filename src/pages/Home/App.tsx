import ContentImg from "../../elements/Home/ContentImg";
import ContentImg2 from "../../elements/Home/ContentImg2";
import Homebegin from "../../elements/Home/Homebegin";
import Imageinfo from "../../elements/Home/Imageinfo";
import IntroBlogs from "../../elements/Home/IntroBlogs";
import Offer from "../../elements/Home/Offer";
import Layout from "../../layout/layout";

function App() {
  
  return (
    <Layout>
      <Homebegin />
      <Imageinfo />
      <Offer />
      <ContentImg />
      <ContentImg2 />
      <IntroBlogs />
    </Layout>
  );
}

export default App;
