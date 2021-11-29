import React, { useState, useEffect } from "react";
//validation
import { validation } from "../validation/validation";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [error, setError] = useState({});
  const [touch, setTouched] = useState({});

  useEffect(() => {
    setError(validation(data));
  }, [data]);

  const changeHandler = (event) => {
    if ([event.target.name] === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const focusHandler = (event) => {
    setTouched({ ...touch, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(error).length) {
    } else {
      setTouched({
        ...touch,
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>Sign Up</h2>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.name && touch.name && <span> {error.name} </span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.email && touch.email && <span> {error.email} </span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.password && touch.password && <span> {error.password} </span>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.confirmPassword && touch.confirmPassword && (
            <span> {error.confirmPassword} </span>
          )}
        </div>
        <div>
          <label>I Accepting the regulations and Policy</label>
          <input
            type="checkbox"
            name="isAccepted"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.isAccepted && touch.isAccepted && (
            <span> {error.isAccepted} </span>
          )}
        </div>
        <a href="#">Login</a>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
