import Blogsbegin from "../../elements/Blogs/Blogsbegin";
import Layout from "../../layout/layout";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchCategories } from "../../redux/reducers/fetchAllcategories";
import { getBlogs } from "../../redux/reducers/fetchBlogs";
import { IBlog } from "../Singleblog/Singleblog";
import { Link } from "react-router-dom";

import DetailsBlog from "../../atoms/Signin/DetailsBlog";
import { calculateReadingTime } from "../../atoms/Signin/timeCalculater";
import SEO from "../../SEO/SEO";

interface ICategory {
  category_name: string;
  id: number;
}

function Blogs() {
  const dispatch = useAppDispatch();

  const [data, setData] = useState<any>(null);

  const [category, setCategory] = useState<number>(10);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getBlogs({ setData, category }));
  }, [category, dispatch]);

  const [query, setQuery] = useState<string>("");

  const categories: ICategory[] = useAppSelector(
    (state) => state.fetchAllcategories.categories.results
  );

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setCategory(10);
  }

  function takeId(id: number) {
    setCategory(id);
  }

  const filteredData = data?.filter((item: IBlog) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <Layout>
      <SEO
        title="Blogs"
        description="Learn new things and improve your skills with great articles.  Find the latest of my writing here. The more your read the more you learn 👌"
        name="’Safarov Academy’"
        type="article"
      />
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
            <button
              onClick={() => takeId(10)}
              className="text-lg mr-2 my-2 px-6 py-3 rounded-full bg-[#171719]"
            >
              All
            </button>
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
          {filteredData?.map((item: IBlog) => {
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
