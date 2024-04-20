import Formofasking from "../../elements/Ask/Formofasking";
import IntroofAsk from "../../elements/Ask/IntroofAsk";
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
