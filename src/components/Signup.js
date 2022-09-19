import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userSlice } from "../store/userSlice";

export function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(userSlice.actions.saveUser(name));
    navigate("/name");
  };

  const handleChangeName = (text) => {
    setName(text);
  };

  return (
    <>
      <p>Signup.js</p>
      <Link to={"/counter"}>counter</Link>
      <form onSubmit={handleSubmitForm}>
        <input
          value={name}
          onChange={(e) => handleChangeName(e.target.value)}
        />
        <div className="button">
          <button
            type="submit"
            style={{
              backgroundColor: name ? "black" : "#cccccc",
              color: name ? "white" : "black",
            }}
            disabled={!name}
          >
            ENTER
          </button>
        </div>
      </form>
    </>
  );
}
