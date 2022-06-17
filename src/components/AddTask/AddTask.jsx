import React from "react";
import styles from "../../UI/Styles.module.css";
import SendButton from "./SendButton";
import InputTask from "./InputTask";

const AddTask = (props) => {
  return (
    <div className={styles.addTask}>
      <SendButton sendTask={props.sendTask} inputValue={props.inputValue} />
      <InputTask input={props.input} />
    </div>
  );
};

export default AddTask;
