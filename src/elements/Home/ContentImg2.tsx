import imagefifth from "../../assets/images/rotate.png";
import ContentImgComp from "../../components/Home/ContentImgComp";
import { ContentInterface } from "./ContentImg";

function ContentImg2() {
  const contentComp: ContentInterface = {
    header: " Useful blogs",
    description1: `    Blogs based on more than`,
    description2: "programming languages",
    body: "And more than 20 categories. Most importantly your career related to JavaScript, TypeScript, React, HTML, CSS and many framework     etc. you can find blogs about",
    link: " Let's ask",
    path: "/",
  };

  return (
    <div className=" w-full mt-32 mb-32 gap-20 items-center grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <img
        src={imagefifth}
        className="col-span-1 flex justify-start w-[350px] xl:h-[250px] lg:h-[260px] md:h-[358px] sm:h-[200px]
        object-cover	"
        alt=""
      />

      <ContentImgComp
        header={contentComp.header}
        description1={contentComp.description1}
        description2={contentComp.description2}
        body={contentComp.body}
        link={contentComp.link}
        path={contentComp.path}
      />
    </div>
  );
}

export default ContentImg2;
