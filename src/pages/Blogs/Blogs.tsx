import Blogsbegin from "../../elements/Blogs/Blogsbegin";
import Layout from "../../layout/layout";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchCategories } from "../../redux/fetchAllcategories";

interface ICategory {
  category_name: string;
  id: number;
}

function Blogs() {
  const [category, setCategory] = useState<number>(0);

  const dispatch = useAppDispatch();

  const categories: ICategory[] = useAppSelector(
    (state) => state.fetchAllcategories.categories.results
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const [query, setQuery] = useState<string>("");

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function takeId(id: number) {
    // setCategory(Number(id));
    setCategory(id);
    console.log(id, category);
  }

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
          <h1 className="text-3xl">Blogs</h1>
        </div>
      </div>
    </Layout>
  );
}

export default Blogs;
