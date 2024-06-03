import React from "react";

type IInputProps = {
  divStyle: string;
  text1: string;
  text2: string;
  value: string;
  changeForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  title: string;
};

const InputDiv: React.FC<IInputProps> = (props) => {
  return (
    <React.Fragment>
      <div className={props.divStyle}>
        <div>
          <p className="text-[22px]  mb-4 tracking-wider"> {props.title}</p>
          <p className="text-[#c3c3c3] text-[17px] font-thin tracking-wide mb-6">
            {props.text1}
            <br />
            {props.text2}
          </p>
        </div>
        <div>
          <input
            required={true}
            value={props.value}
            onChange={(e) => props.changeForm(e)}
            id={props.id}
            type="text"
            className="bg-[#171719] w-4/5 h-24 indent-3 outline-none border-0 rounded-md 
      px-4 py-3"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default InputDiv;
