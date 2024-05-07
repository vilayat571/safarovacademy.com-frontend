import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const storedCount = localStorage.getItem("pageVisits");
  
  useEffect(() => {
 
    const initialCount: any = storedCount ? Number(storedCount) : 0;
    setCount(initialCount + 1);
    localStorage.setItem("pageVisits", initialCount + 1);
  }, []);

  return (
    <div className="text-lg mt-2 ">
      <span className="text-[#9e9e9e]">Total Visits</span> :
      <span className="text-white font-semibold leading-9 tracking-wider"> {count}</span>
    </div>
  );
}

export default Counter;
