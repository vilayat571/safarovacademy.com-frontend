import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


interface PROPS{
    style:string
}

function Arrrow(props:PROPS) {
  return (
    <FontAwesomeIcon className={props.style} icon={faArrowRight} />
  );
}

export default Arrrow;
