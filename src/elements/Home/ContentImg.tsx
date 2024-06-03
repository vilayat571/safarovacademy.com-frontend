import globus from "../../assets/images/globus.png";
import ContentImgComp from "../../components/Home/ContentImgComp";

export interface ContentInterface {
  header: string;
  description1: string;
  description2: string;
  body: string;
  link: string;
  path: string;
}

function ContentImg() {
  const contentComp: ContentInterface = {
    header: "Ask a question",
    description1: `I am blogging`,
    description2: "based on my experience",
    body: "But I'm also improving my skills by answering questions. So I think that if someone is helping someone else, it's an investment in  themselves. Let us know if you have any questions",
    link: "Signin to ask ",
    path: "/signin",
  };

  return (
    <div className=" w-full mt-48 mb-32  grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <ContentImgComp
        header={contentComp.header}
        description1={contentComp.description1}
        description2={contentComp.description2}
        body={contentComp.body}
        link={contentComp.link}
        path={contentComp.path}
      />

      <div className="col-span-1 flex justify-end xl:mt-0 lg:mt-0 md:mt-0 sm:mt-32 ">
        <img
          src={globus}
          className="w-[418px] xl:h-[358px] lg:h-[358px] md:h-[358px] sm:h-[300px] object-cover	"
          alt=""
        />
      </div>
    </div>
  );
}

export default ContentImg;
