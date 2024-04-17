import { useEffect, useState } from "react";
import Layout from "../../layout/layout";
import { useParams } from "react-router-dom";

export interface IBlog {
  author: number | string;
  body: string;
  description: string;
  id: number;
  image: string;
  title: string;
}

function Singleblog() {
  const [blog, setBlog] = useState<IBlog | any>(null);

  const { blogName } = useParams();

  console.log(blogName);

  useEffect(() => {
    fetch(`https://api.safarovacademy.com//api/v1/blog/${blogName}/`)
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, [blogName]);

  console.log(blog);

  return (
    <>
      {blog !== null ? (
        <Layout>
          <div className="border grid grid-cols-1">
            <div>{blog.title}</div>
            <div className="flex justify-center items-center">
            <img
              src={blog.image}
              alt=""
              className="w-[975px] rounded-xl mt-16 h-[600px] object-cover"
            />
            </div>
          </div>
        </Layout>
      ) : (
        "Loading"
      )}
    </>
  );
}

export default Singleblog;
