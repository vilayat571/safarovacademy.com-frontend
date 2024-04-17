import { useEffect, useState } from "react";
import { fetchData } from "../../redux/reducers/fetchBlogs";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Link, useLocation } from "react-router-dom";
import { IBlog } from "../../pages/Singleblog/Singleblog";
import Arrrow from "../../atoms/Navbar/Arrrow";

function Bloglar() {
  const [data, setData] = useState<IBlog | any>([]);
  const dispatch = useAppDispatch();

  const location = useLocation();
  //location.pathname=='/blogs' ?

  const blogs = useAppSelector((state) => state.fetchBlogs.blogs);

  useEffect(() => {
    dispatch(fetchData());
    setData(blogs.results);
  }, []);

  return (
    <div className="mt-24">
      {location.pathname !== "/blogs" && (
        <div>
          <p className="text-[#FF9431] mt-2 text-[19px]">Blogs</p>
          <p className="text-white text-[27px] font-semibold mt-2 mb-16">
            Go to see all blogs{" "}
            <Arrrow style="-rotate-45 mr-2 text-2xl text-white " />
          </p>
        </div>
      )}
      <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
        {data?.map((item: IBlog) => {
          return (
            <Link key={item.id} to={`/blogs/${item.id}`} className="col-span-2">
              <img
                className="w-[340px] h-[450px] object-cover rounded-xl"
                src={item.image}
                alt=""
              />
              <p className=" text-[#c3c3c3] text-lg font-medium mt-5">
                {item.description}
              </p>
              <p className=" text-[#fff] font-semibold text-xl mt-3">
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Bloglar;
