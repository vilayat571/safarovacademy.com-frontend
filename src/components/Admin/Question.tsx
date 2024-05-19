import { useEffect, useState } from "react";
import Adminlayout from "../../elements/Admin/Adminlayout";
import { Link } from "react-router-dom";

function Question() {
  const data: any = localStorage.getItem("signIn");
  const object = JSON.parse(data);

  const [questions, setQuestions] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.safarovacademy.com/api/v1/blog/questions/?owner=${object.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Adminlayout>
      {loading ? (
        <div className="w-full h-screen text-center flex justify-center items-center">
          <p className="text-xl mb-1 text-[#cfcfcf]">Data is loading...</p>
        </div>
      ) : (
        <div className="xl:w-4/5 md:w-full lg:w-4/5 sm:w-full h-screen overflow-auto py-20 px-12">
          {questions?.count == 0 ? (
            <div className="w-full h-screen text-center flex justify-center items-center">
              <div>
                <p className="text mb-1 text-[#cfcfcf]">
                  You haven't asked any questions yet
                </p>
                <Link
                  to="/askquestion"
                  className="text-lg font-semibold tracking-wider leading-9"
                >
                  Let's ask {":)"}
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-xl leading-9 tracking-wider text-[#cfcfcf] mb-4">
                You asked {questions?.count == 1 && "only "}
                {questions?.count}
                {questions?.count > 1 ? " questions" : "question"} so far
              </p>
              <div className=" grid grid-cols-1 gap-y-10 mt-10 ">
                {questions?.results.map((item: any) => {
                  return (
                    <div
                      className=" overflow-x-hidden  col-span-1 xl:w-2/3 lg:w-2/3 md:w-full sm:w-full 
                    
                    border-b-[0.4px] pb-2 border-[#a0a0a0]"
                    >
                      <p className="font-semibold mb-2 leading-9 text-white tracking-wider text-lg">
                        {item.title}
                      </p>
                      <p className=" text-[#cfcfcf] tracking-wider text-regular">
                        {item.subject}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </Adminlayout>
  );
}

export default Question;
