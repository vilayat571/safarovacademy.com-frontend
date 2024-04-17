import { Link } from "react-router-dom";

function Items() {
  interface Paths {
    to: string;
    name: string;
  }

  const paths: Paths[] = [
    {
      to: "/blogs",
      name: "Blogs",
    },
    {
      to: "/askquestion",
      name: "Blogs",
    },
    {
      to: "/",
      name: "   Who I'am",
    },
  ];

  return (
    <div className="flex text-lg font-medium text-[#C3C3C3] justify-between ">
      {paths.map((item: Paths) => {
        return (
          <Link className="mx-4" to={item.to}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Items;
