import React, { useContext } from "react";
import { Context } from "../../Сontext";
import styles from "../../UI/Button/Button.module.css";

const SendButton = () => {
  const value = useContext(Context);
  return <div className={styles.sendButton} onClick={value.sendTask} />;
};

export default SendButton;
