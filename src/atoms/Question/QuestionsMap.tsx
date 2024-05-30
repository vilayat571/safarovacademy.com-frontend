import React from "react";

const QuestionsMap: React.FC<any> = (props) => {
  return (
    <div>
      <p className="text-xl  leading-9 tracking-wider text-[#cfcfcf] mb-4">
        You asked {props.questions?.count == 1 && "only "}
        {props.questions?.count}
        {props.questions?.count > 1 ? " questions" : " question "} so far
      </p>
      <div className=" grid grid-cols-1 gap-y-10 mt-10 ">
        {props.questions?.results.map((item: any) => {
          return (
            <div
            key={Math.random()}
              className=" overflow-x-hidden  col-span-1 xl:w-2/3 lg:w-2/3 md:w-full sm:w-full 
        
        border-[1px] rounded-sm p-4 pb-2 border-[#a0a0a0]"
            >
              <p className="font-semibold  leading-6 text-white tracking-wider text ">
                {item.title}
              </p>
              <p className=" text-[#cfcfcf] text-sm tracking-wider text-regular mb-2 mt-2">
                {item.subject}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsMap;
