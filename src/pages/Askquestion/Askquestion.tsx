import Formofasking from "../../components/Ask/Formofasking";
import IntroofAsk from "../../components/Ask/IntroofAsk";
import Layout from "../../layout/layout";

function Askquestion() {
  return (
    <Layout>
      <div >
        <IntroofAsk />
        <Formofasking />
      </div>
    </Layout>
  );
}

export default Askquestion;
