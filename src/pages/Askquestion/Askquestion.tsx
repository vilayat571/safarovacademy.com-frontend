import SEO from "../../SEO/SEO";
import Formofasking from "../../elements/Ask/Formofasking";
import IntroofAsk from "../../elements/Ask/IntroofAsk";
import Layout from "../../layout/layout";

function Askquestion() {
  return (
    <Layout>
      <SEO
        title="Ask a question"
        description="Ask me a unique question individually, I will answer you asap. In order to do that, you must have an account then you will be able to ask 🔥"
        name="’Safarov Academy’"
        type="media"
      />
      <div>
        <IntroofAsk />
        <Formofasking />
      </div>
    </Layout>
  );
}

export default Askquestion;
