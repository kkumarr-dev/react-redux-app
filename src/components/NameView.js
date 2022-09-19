import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const NameView = (props) => {
  debugger;
  const name = useSelector((state) => state.user);
  return (
    <>
      <p>nameview.js</p>
      <span>name: {name}</span>
      <Link to={"/persist"}>persist</Link>
    </>
  );
};
