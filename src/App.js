import React, { useRef, useState, useMemo } from "react";

import AddTask from "./components/AddTask/AddTask";
import Footer from "./components/Footer";
import TaskList from "./components/TodoList/TaskList";

import styles from "./UI/Styles.module.css";

import { Context } from "./Сontext";

const App = () => {
  const exampleTasks = [
    {
      id: 1,
      body: "Тестовое задание",
      isActive: true,
    },

    {
      id: 2,
      body: "Прекрасный код",
      isActive: false,
    },
    {
      id: 3,
      body: "Покрытие тестами",
      isActive: true,
    },
  ];
  //Storing todos
  const [tasks, setTasks] = useState([...exampleTasks]);
  // Array for showing todos
  const [showTasks, setShowTasks] = useState([...tasks]);
  const [todoIdCounter, setTodoIdCounter] = useState(exampleTasks.length);
  const [input, setInput] = useState("");
  const changeInput = (text) => setInput(text);
  const inputValue = useRef();
  // Filtering todos
  const [filterValue, setFilterValue] = useState("all");
  const changeFilter = function (activeFilter) {
    setFilterValue(activeFilter);
  };
  const tasksFilter = useMemo(() => {
    switch (filterValue) {
      case "active":
        setShowTasks(tasks.filter((task) => task.isActive));
        break;
      case "completed":
        setShowTasks(tasks.filter((task) => !task.isActive));
        break;
      default:
        setShowTasks(tasks.filter((task) => task));
        break;
    }
  }, [tasks, filterValue]);
  // Send new task
  const sendTask = function () {
    const isInputTask = input.replace(/\s+/g, "");
    if (!isInputTask) alert("task body is empty!");
    else {
      let newTask = {
        id: todoIdCounter + 1,
        body: inputValue.current.value,
        isActive: true,
      };
      setTodoIdCounter(newTask.id);
      setTasks([...tasks, newTask]);
      setInput("");
      inputValue.current.focus();
    }
  };
  // Active/inactive todo
  const toggleTodo = function (todoId) {
    let tempArr = [...tasks];
    let index = tempArr.findIndex((el) => el.id === todoId);
    tempArr[index].isActive = !tempArr[index].isActive;
    setTasks([...tempArr]);
  };

  const clearCompleted = function () {
    let temp = tasks.filter((task) => task.isActive);
    setTasks([...temp]);
  };

  const value = {
    input,
    changeInput,
    sendTask,
    inputValue,
    tasks,
    toggleTodo,
    changeFilter,
    showTasks,
    clearCompleted,
    filterValue,
  };

  return (
    <Context.Provider value={value}>
      <h1>todos</h1>
      <div className={styles.wrapper}>
        <AddTask />
        <div className={styles.todoListContainer}>
          <TaskList />
        </div>
        <Footer />
      </div>
    </Context.Provider>
  );
};

export default App;
