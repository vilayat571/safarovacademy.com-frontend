import { Link } from "react-router-dom";

interface Props {
  font: string;
}

const Logo: React.FC<Props> = (props) => {
  return (
    <div className={`${props.font} font-bold tracking-wider leading-9`}>
      <Link to={"/"}> safarov.</Link>
    </div>
  );
};

export default Logo;
