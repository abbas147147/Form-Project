import React from "react";

//signUp
import SignUp from "./SignUp&Login/SignUp";
//css
import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <SignUp />
    </div>
  );
};

export default App;
