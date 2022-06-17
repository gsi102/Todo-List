import React, { useContext } from "react";
import { Context } from "../../Сontext";
import TaskItem from "./TaskItem";

import styles from "../../UI/Styles.module.css";

const TaskList = () => {
  const value = useContext(Context);
  const tasks = value.showTasks;
  return (
    <div className={styles.todoList}>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
