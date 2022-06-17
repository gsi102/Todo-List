import React, { useContext } from "react";
import { Context } from "../Сontext";

import styles from "../UI/Styles.module.css";

const Footer = () => {
  const value = useContext(Context);

  const filterValue = value.filterValue;

  let activeItemsCounter = 0;
  value.tasks.filter((task) => (task.isActive ? activeItemsCounter++ : null));

  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <span>{activeItemsCounter} items left</span>
      </div>
      <div className={styles.footerItem}>
        <div
          className={
            filterValue === "all"
              ? styles.footerButtonActive
              : styles.footerButton
          }
          onClick={() => value.changeFilter("all")}
        >
          All
        </div>
        <div
          className={
            filterValue === "active"
              ? styles.footerButtonActive
              : styles.footerButton
          }
          onClick={() => value.changeFilter("active")}
          data-testid="activeFilter"
        >
          Active
        </div>
        <div
          className={
            filterValue === "completed"
              ? styles.footerButtonActive
              : styles.footerButton
          }
          onClick={() => value.changeFilter("completed")}
        >
          Completed
        </div>
      </div>
      <div className={styles.footerItem}>
        <div className={styles.footerButton} onClick={value.clearCompleted}>
          Clear completed
        </div>
      </div>
    </div>
  );
};

export default Footer;
