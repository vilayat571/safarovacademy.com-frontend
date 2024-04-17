import Blogsbegin from "../../components/Blogs/Blogsbegin";
import Layout from "../../layout/layout";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { Link } from "react-router-dom";
import { IBlog } from "../../pages/Singleblog/Singleblog";
import { getAllBlogs } from "../../redux/reducers/fetchAllblogs";

function Blogs() {
  const [allBlogs, setAllBlogs] = useState<IBlog[] | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllBlogs(setAllBlogs));
  }, []);

  const [query, setQuery] = useState<string>("");
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  const filterBlogs =
    allBlogs &&
    allBlogs?.filter((item: IBlog) => {
      return item.title.toLocaleLowerCase().includes(query.toLowerCase());
    });

  return (
    <Layout>
      <div>
        <Blogsbegin />

        <div className="flex justify-center mt-24 items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e)}
            placeholder="Search a blog"
            className=" bg-[#232323] w-[500px] h-[68px]  px-6 indent-4 
           placeholder:text-white tracking-wide text-[17px] rounded-full  outline-none"
          />
        </div>

        <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6 mt-20">
          {filterBlogs?.map((item: IBlog) => {
            return (
              <Link
                key={item.id}
                to={`/blogs/${item.id}`}
                className="col-span-2 border flex justify-center "
              >
                <div>
                  <img
                    className="w-[340px] h-[450px] object-cover rounded-xl"
                    src={item.image}
                    alt=""
                  />
                  <p className=" text-[#c3c3c3] text-lg font-medium mt-5">
                    {item.description}
                  </p>
                  <p className=" tracking-wide leading-10 text-[#fff] font-semibold text-xl mt-3">
                    {item.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Blogs;
