import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSlice } from "../store/userSlice";

export const Name = (props) => {
  debugger;
  const stateName = useSelector((state) => state.user);
  const [name, setName] = useState(stateName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    dispatch(userSlice.actions.saveUser(name));
    navigate("/nameview");
  };
  return (
    <>
      <p>Name.js</p>
      <p>stateName:{stateName}</p>
      <input
        type="number"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" onClick={handleSubmit} />
    </>
  );
};
