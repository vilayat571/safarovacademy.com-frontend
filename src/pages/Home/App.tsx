import ContentImg from "../../elements/Home/ContentImg";
import ContentImg2 from "../../elements/Home/ContentImg2";
import Homebegin from "../../elements/Home/Homebegin";
import Imageinfo from "../../elements/Home/Imageinfo";
import IntroBlogs from "../../elements/Home/IntroBlogs";
import Offer from "../../elements/Home/Offer";
import Layout from "../../layout/layout";
import React from "react";
import SEO from "../../SEO/SEO";

const App: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <SEO
        title="Who I'am"
        description="Hi there! I am  Vilayat Safarov, Software developer with  UI\UX design skills"
        name="’Safarov Academy’"
        type="infographic"
      />
      <Layout>
        <Homebegin />
        <Imageinfo />
        <Offer />
        <ContentImg />
        <ContentImg2 />
        <IntroBlogs />
      </Layout>
    </React.Fragment>
  );
};

export default App;
