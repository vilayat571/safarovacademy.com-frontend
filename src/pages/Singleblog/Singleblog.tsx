import { useEffect, useState } from "react";
import Layout from "../../layout/layout";
import { Link, useParams } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { url } from "../../atoms/Signin/Gif";
import DetailsBlog from "../../atoms/Signin/DetailsBlog";
import { calculateReadingTime } from "../../atoms/Signin/timeCalculater";
import Author from "../../atoms/Singleblog/Author";
import SEO from "../../SEO/SEO";
export interface IBlog {
  author: number | string;
  body: string;
  description: string;
  id: number;
  image: string;
  title: string;
  created_date: string;
}

function Singleblog() {
  const [blog, setBlog] = useState<IBlog | any>(null);

  const { blogName } = useParams();

  useEffect(() => {
    fetch(`https://api.safarovacademy.com/api/v1/blog/${blogName}/`)
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, [blogName]);

  const divStyle: React.CSSProperties | undefined = {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    paddingTop: "56%",
  };

  const iframeStyle: React.CSSProperties | undefined = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: " 100%",
    border: "none",
  };

  return (
    <>
    
      {blog !== null ? (
        <Layout>
               <SEO
        title={blog.title.slice(0,20)}
        description={blog.body.slice(0,200)}
        name="’Safarov Academy’"
        type="blog"
      />
          <div className=" grid grid-cols-1 relative top-16">
            <div className="">
              <div className="relative xl:left-20 lg:left-20 md:left-20 sm:left-0">
                <p className="mb-12">
                  <Link
                    to="/blogs"
                    className="text-lg text-[#c3c3c3] font-light tracking-wide leading-9"
                  >
                    Back to overview
                    <FontAwesomeIcon
                      className={"-rotate-45"}
                      icon={faArrowRight}
                    />
                  </Link>
                </p>
                <span className="block text-3xl font-semibold text-[#fff] tracking-wider leading-9">
                  {blog.title}
                </span>
                <span className="block text-xl text-[##c3c3c3] tracking-wider leading-9 mt-2">
                  <DetailsBlog
                    contentTime={calculateReadingTime(blog.body)}
                    contentDate={blog.created_date}
                  />
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              {blog.category != 9 && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-[975px] rounded-lg mt-16 h-[600px] object-cover"
                />
              )}
            </div>
            <div style={divStyle} className="mt-16">
              {blog !== null && blog.description.includes("https") && (
                <iframe
                  className="rounded"
                  style={iframeStyle}
                  src={blog.description}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title={blog.title}
                  allowFullScreen={true}
                  referrerPolicy="strict-origin-when-cross-origin"
                  frameBorder="0"
                />
              )}
            </div>

            <div
              className="relative xl:left-10 lg:left-10 md:left-10 sm:left-0 mt-12 rounded-lg overflow-hidden"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            ></div>

            <hr className="mb-8 mt-20 lg:mx-20 md:mx-20 sm:mx-0 xl:mx-20 border-[#c3c3c3]" />
            <Author />
          </div>
        </Layout>
      ) : (
        <div className="bg-black flex justify-center items-center w-full h-screen">
          <img className="w-[200px] h-[200px] object-cover " src={url} alt="" />
        </div>
      )}
    </>
  );
}

export default Singleblog;
{
  /* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/_7xbMKcP3OY?si=6jA46PBLCX0mTd9w"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>; */
}
