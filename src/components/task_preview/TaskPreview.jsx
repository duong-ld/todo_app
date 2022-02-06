import { useContext, useState } from "react";
import { Collapse } from "react-collapse";
import { TaskContext } from "../../contexts/TaskContext";
import Form from "../Form";
import CheckBox from "./CheckBox";
import FunctionButton from "./FunctionButton";

const TaskPreview = ({ task, onSelect }) => {
  const { dispatch } = useContext(TaskContext);
  // "open" varible for detail form
  const [open, setOpen] = useState(false);
  // "checked" varible for check label
  const [checked, setChecked] = useState(false);

  const toggleDetail = () => setOpen(!open);

  const handelCheck = () => {
    onSelect(!checked, task.id);
    setChecked(!checked);
  };

  const handleUpdate = (task) => {
    setOpen(false);
    dispatch({ type: "UPDATE_TASK", task });
  };

  const handleDestroy = (id) => {
    setOpen(false);
    dispatch({ type: "DESTROY_TASK", id });
  };

  const getTaskStyle = (task) => {
    let taskStyle = "task-preview";
    if (task.status === "done") {
      taskStyle += " done";
      return taskStyle;
    } else if (Date.parse(task.dueDate) < Date.now()) {
      taskStyle += " overdue";
      return taskStyle;
    }

    // check priority
    if (task.priority === "Low") {
      taskStyle += " low";
    } else if (task.priority === "Medium") {
      taskStyle += " medium";
    } else if (task.priority === "High") {
      taskStyle += " high";
    }
    return taskStyle;
  };

  return (
    <>
      <div className={getTaskStyle(task)} key={task.id}>
        <CheckBox task={task} checked={checked} handelCheck={handelCheck} />
        <FunctionButton
          task={task}
          checked={checked}
          onDestroy={handleDestroy}
          toggleDetail={toggleDetail}
        />
      </div>

      <Collapse isOpened={open}>
        <div className="container p-3 border">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <Form task={task} action={handleUpdate} actionName={"Update"} />
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
};

export default TaskPreview;
