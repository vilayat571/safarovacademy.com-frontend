import { useEffect, useMemo } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchSomeBlogs } from "../../redux/reducers/introBlogsSlice";
import { IBlog } from "../../pages/Singleblog/Singleblog";
import { Link } from "react-router-dom";
import { calculateReadingTime } from "../../atoms/Signin/timeCalculater";
import DetailsBlog from "../../atoms/Signin/DetailsBlog";

function IntroBlogs() {
  const blogs = useAppSelector(
    (state: RootState) => state.introBlogsSlice.data.results
  );

  const data = useMemo(() => {
    return blogs;
  }, [blogs]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSomeBlogs());
  }, []);


  return (
    <div className="">
      <div className="">
        <p className="text-normal mb-2 font-semibold tracking-wide text-[#FF9431]">
          Blogs
        </p>
        <p>
          <Link
            to={"/blogs"}
            className="text-2xl font-semibold tracking-wide leading-8"
          >
            Go to see all blogs
          </Link>
        </p>
      </div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-8">
        {data?.slice(0, 3).map((item: IBlog) => {
          return (
            <Link
              key={item.id}
              to={`/blogs/${item.id}`}
              className="col-span-2 flex xl:justify-center lg:justify-center md:justify-start sm:justify-start "
            >
              <div>
                <img
                  className="w-[360px] h-[450px] mb-4 object-cover rounded-xl"
                  src={item.image}
                  alt={item.title}
                />
                 <DetailsBlog
                      contentTime={calculateReadingTime(item.body)}
                      contentDate={item.created_date}
                    />
                <p className=" tracking-wide line-clamp-1 text-[#fff] font-semibold text-lg mt-2">
                  {item.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default IntroBlogs;
