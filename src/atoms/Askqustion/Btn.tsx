import React from 'react'

interface IBTN{
    text:string,
    style:string,
    sendData:(e:any)=>void;
}

const Btn:React.FC<IBTN> = (props) => {
  return (
    <button
    onClick={(e) => props.sendData(e)}
    className={props.style}
  >
 {props.text}
  </button>
  )
}

export default Btn
