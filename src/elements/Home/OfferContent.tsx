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
        " I built apps to help people shop online (ecommerce), manage customers (CRM), and run businesses (ERP). I also helped out on free software projects like Saleor and Tailwind. Ever since I started learning to code in college, I've always wanted to be a coding pro.",
    },
    {
      src: cubes,
      title: "   UI/UX design",
      description:
        "    I wanted my software projects to be not just functional, but also visually appealing. So, I used design tools like Figma and Adobe XD to create a sleek and user-friendly interface. I didn't just stick to the basics, I used  different tricks and plugins to really make the design better    ",
    },
  ];

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 ssm:grid-cols-2 gap-8">
      <OffercontentComp compData={compData} />
    </div>
  );
}

export default OfferContent;
