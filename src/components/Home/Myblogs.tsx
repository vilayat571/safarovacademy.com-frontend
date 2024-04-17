import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchData } from "../../redux/reducers/fetchBlogs";


function Myblogs() {
  const dispatch = useAppDispatch();
  const allBlogs = useAppSelector((state) => state.fetchAllblogs.blogs);


  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      {allBlogs &&
        allBlogs?.map((item: any) => {
          return <div>{item.title}</div>;
        })}
    </div>
  );
}

export default Myblogs;
