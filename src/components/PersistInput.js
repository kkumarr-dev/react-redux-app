import { connect } from "react-redux";
import { Link } from "react-router-dom";
const updateText = (text) => {
  return {
    type: "UPDATE",
    text,
  };
};
const PersistInput = ({ text, dispatch }) => {
  debugger;
  const textHandler = (e) => {
    debugger;
    dispatch(updateText(e.target.value));
  };
  return (
    <>
      <textarea onChange={textHandler}>{text}</textarea>
      <p>
        saved redux value-<b>{text}</b>
      </p>
      <Link to={"/"}>home</Link>
    </>
  );
};
const mapStateToProps = (state) => {
  return { text: state.persist.form.text };
};
export default connect(mapStateToProps)(PersistInput);
