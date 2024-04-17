import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getAllBlogs } from "../../redux/reducers/fetchAllblogs";

function Myblogs() {
  const dispatch = useAppDispatch();
  const allBlogs = useAppSelector((state) => state.fetchAllblogs.allBlogs);

  console.log(allBlogs);

  useEffect(() => {
    dispatch(getAllBlogs());
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
