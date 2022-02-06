import React, { createContext, useReducer, useEffect } from "react";
import { taskReducer } from "../reducers/taskReducer";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
