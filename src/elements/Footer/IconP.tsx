import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TP = {
  icon: any;
  text: string;
  link: string;
};

const IconP: React.FC<TP> = (props) => {
  return (
    <p className="mb-2">
      <a href={props.link} target="blank" className="text-xl">
        <FontAwesomeIcon
          className="mr-[6px] ml-[2px] text-xl"
          icon={props.icon}
        />
        {props.text}
      </a>
    </p>
  );
};

export default IconP;
