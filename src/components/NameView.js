import { useSelector } from "react-redux";

export const NameView = (props) => {
  debugger;
  const name = useSelector((state) => state.user);
  return (
    <>
      <p>nameview.js</p>
      <span>name: {name}</span>
    </>
  );
};
