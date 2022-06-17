import React, { useContext } from "react";
import { Context } from "../../Сontext";

import styles from "../../UI/Input/Input.module.css";

const InputTask = () => {
  const value = useContext(Context);

  return (
    <input
      type="text"
      className={styles.myInput}
      ref={value.inputValue}
      value={value.input}
      placeholder="What needs to be done?"
      onChange={(e) => value.changeInput(e.target.value)}
      onKeyDown={(e) => (e.key === "Enter" ? value.sendTask() : null)}
    />
  );
};

export default InputTask;
