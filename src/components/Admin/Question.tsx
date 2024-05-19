import { useEffect, useState } from "react";
import Adminlayout from "../../elements/Admin/Adminlayout";

function Question() {
  const data: any = localStorage.getItem("signIn");
  const object = JSON.parse(data);

  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    const url = `https://api.safarovacademy.com/api/v1/blog/questions/?owner=${object.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

 

  return (
    <Adminlayout>
      <div className="w-4/5 border-2  overflow-auto ">
      {
        questions?.results.map((item:any)=>{
          return item.title
        })
      }
      </div>
    </Adminlayout>
  );
}

export default Question;
