import { connect } from "react-redux";
import { addCount, subCount } from "../store/CounterActions";
import { Signup } from "./Signup";
const Counter = ({ count, incCount, descCount }) => {
  debugger;
  return (
    <>
      <p>counter.js</p>
      <button onClick={() => descCount()}>-</button>
      <span>{count}</span>
      <button onClick={() => incCount()}>+</button>
      <Signup />
    </>
  );
};

const mapStateToProps = (state) => ({ count: state.count });
const mapDispatchToProps = (dispatch) => ({
  incCount: (e) => dispatch(addCount(e)),
  descCount: (e) => dispatch(subCount(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
