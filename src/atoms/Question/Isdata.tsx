import React from "react";
import Letsask from "./Letsask";
import QuestionsMap from "./QuestionsMap";

const Isdata: React.FC<any> = (props) => {
  return (
    <div className="xl:w-4/5 md:w-full lg:w-4/5 sm:w-full h-screen overflow-auto py-20 px-12">
      {props.questions?.count == 0 ? (
        <Letsask />
      ) : (
        <QuestionsMap questions={props.questions} />
      )}
    </div>
  );
};

export default Isdata;
