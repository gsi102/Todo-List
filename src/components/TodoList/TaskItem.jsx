import React, { useContext } from "react";
import { Context } from "../../Сontext";

import styles from "../../UI/Styles.module.css";

const TaskItem = (props) => {
  const value = useContext(Context);
  const todoId = props.task.id;
  const isActive = props.task.isActive;

  return (
    <div
      className={isActive ? styles.taskItemActive : styles.taskItemCompleted}
      onClick={() => value.toggleTodo(todoId)}
    >
      <div className={styles.taskToggle}>
        <div className={isActive ? "" : styles.taskToggleActive}></div>
      </div>
      <div className={styles.taskBody}>{props.task.body}</div>
    </div>
  );
};

export default TaskItem;
