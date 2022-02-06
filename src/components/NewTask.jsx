import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Form from "./Form";

function NewTask() {
  const { dispatch } = useContext(TaskContext);

  const handleStore = (task) => {
    dispatch({ type: "STORE_TASK", task });
  };

  return (
    <div className="container border pb-3 ml-3 pt-3">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <br />
          <h2 style={{ fontWeight: "bold" }}>New Task</h2>
          <br />
          <Form action={handleStore} actionName={"Store"} />
        </div>
      </div>
    </div>
  );
}

export default NewTask;
