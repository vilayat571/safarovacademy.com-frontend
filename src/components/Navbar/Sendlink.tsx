import { Link } from "react-router-dom";
import Arrrow from "./Arrrow";

export interface LinkInterface {
  divStyle: string;
  arrowStyle: string;
}
function Sendlink(props: LinkInterface) {
  return (
    <div className={props.divStyle}>
      <Arrrow style={props.arrowStyle} />
      <Link to={'/'}>Portfolio</Link>
    </div>
  );
}

export default Sendlink;
