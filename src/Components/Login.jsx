import React, { useState } from "react";
import "../Css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitDisables, setSubmitDisables] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password)
      return setErrorMsg("All Fields Are Required");
    setSubmitDisables(true);
    setErrorMsg("");

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        console.log(res)
        navigate("/");
      })
      .catch((err) => setErrorMsg(err.message));

    setSubmitDisables(false);
    console.log(values);
  };

  return (
    <div className="LoginWrapper">
      <div className="LoginContainer">
        <h2>Login In</h2>
        <hr />
        <form action="" method="post">
          <div className="userName form-group">
            {/* <label htmlFor="username">Username :</label> */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Username "
              value={values.email}
              onChange={(e) => {
                setValues((p) => ({ ...p, email: e.target.value }));
              }}
            />
          </div>
          <div className="Password form-group">
            {/* <label htmlFor="password">Password :</label> */}
            <input
              type="password"
              name="password"
              id="password "
              placeholder="Enter Your Password"
              value={values.password}
              onChange={(e) => {
                setValues((p) => ({ ...p, password: e.target.value }));
              }}
            />
          </div>
          <p className="errorMsg">{errorMsg}</p>
          <button
            className="button"
            disabled={submitDisables}
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <div className="already">
          <p>
            Create a New Account{" "}
            <span>
              <strong>
                <Link to="/signup">Sign Up</Link>
              </strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
