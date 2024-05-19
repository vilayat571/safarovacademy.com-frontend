import Blogsbegin from "../../elements/Blogs/Blogsbegin";
import Layout from "../../layout/layout";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Link } from "react-router-dom";
import { IBlog } from "../../pages/Singleblog/Singleblog";
import { getSomeblogs } from "../../redux/reducers/fetchAllblogs";
import { fetchCategories } from "../../redux/fetchAllcategories";
import { getAllBlogs } from "../../redux/reducers/allBlogs";
import DetailsBlog from "../../atoms/Signin/DetailsBlog";
import { calculateReadingTime } from "../../atoms/Signin/timeCalculater";

interface ICategory {
  category_name: string;
  id: number;
}

function Blogs() {
  const [allBlogs, setAllBlogs] = useState<IBlog[] | null>(null);

  const [category, setCategory] = useState<number>(0);

  const dispatch = useAppDispatch();

  const categories: ICategory[] = useAppSelector(
    (state) => state.fetchAllcategories.categories.results
  );

  useEffect(() => {
    dispatch(getSomeblogs({ setAllBlogs: setAllBlogs, category: category }));
    dispatch(getAllBlogs({ setAllBlogs: setAllBlogs }));
    dispatch(fetchCategories());
  }, []);

  const [query, setQuery] = useState<string>("");
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function takeId(id: number) {
    setCategory(Number(id));
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
            className=" bg-[#1F2025] w-[500px] h-[68px]  px-6 indent-4 
           placeholder:text-white tracking-wide text-[17px] rounded-full  outline-none"
          />
        </div>

        <div className=" my-16 flex justify-center">
          <div className="xl:w-4/5 lg:w-4/5 md:w-4/5 sm:w-full">
            {categories?.map((item: ICategory) => {
              return (
                <button
                  onClick={() => takeId(item.id)}
                  key={item.id}
                  className="text-lg mr-2 my-2 px-6 py-3 rounded-full bg-[#171719]"
                >
                  {item.category_name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6 mt-20">
          {filterBlogs?.map((item: IBlog) => {
            return (
              <Link
                key={item.id}
                to={`/blogs/${item.id}`}
                className="col-span-2 mb-4 flex justify-center "
              >
                <div>
                  <img
                    className="w-[350px] h-[450px] object-cover rounded-xl"
                    src={item.image}
                    alt=""
                  />
                  <p className=" text-[#c3c3c3] text-xl font-medium mt-6">
                 
                    <DetailsBlog
                      contentTime={calculateReadingTime(item.body)}
                      contentDate={item.created_date}
                    />
                  </p>
               

                  <p className=" tracking-wider leading-10 text-[#fff] font-semibold text-xl mt-2">
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
