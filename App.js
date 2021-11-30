import React from "react";

//Form
import Login from "./SignUp&Login/Login";
import SignUp from "./SignUp&Login/SignUp";
//css
import styles from "./app.module.css";
//routerdom
import { Switch, Redirect, Route } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.container}>
      <Switch>
        <Route path="/Signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Redirect to="/Signup" />
      </Switch>
    </div>
  );
};

export default App;
