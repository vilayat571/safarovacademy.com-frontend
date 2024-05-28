import figures from "../../assets/images/figures.png";
import cubes from "../../assets/images/cubs.png";
import OffercontentComp from "../../components/Home/OffercontentComp";

export interface OfferContentComp {
  src: any;
  title: string;
  description: string;
}

function OfferContent() {
  const compData: OfferContentComp[] = [
    {
      src: figures,
      title: "Web Development",
      description:
        "  I have 3 years of experience as a front-end developer. I recently built a responsive e-commerce website using HTML, CSS, and JavaScript. I'm a strong problem-solver and enjoy collaborating with designers to bring websites to life.",
    },
    {
      src: cubes,
      title: "   UI/UX design",
      description:
        "    I have 3 years of experience as a front-end developer. I recently  built a responsive e-commerce website using HTML, CSS, and JavaScript. I'm a strong problem-solver and enjoy collaborating with   designers to bring websites to life.",
    },
  ];

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 ssm:grid-cols-2 gap-8">
      <OffercontentComp compData={compData} />
    </div>
  );
}

export default OfferContent;
