import { useState } from "react";
import { Collapse } from "react-collapse";
import Form from "./form";

const TaskPreview = ({ task, onDestroy, onUpdate, onSelect }) => {
  const [open, setOpen] = useState(false);
  // check box
  const [checked, setChecked] = useState(false);
  const toggle = () => setOpen(!open);

  const handelCheck = () => {
    onSelect(!checked, task.id);
    setChecked(!checked);
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

  const handleUpdate = (task) => {
    onUpdate(task);
    setOpen(false);
  };

  const renderDestroyButton = () => {
    if (checked) {
      return (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDestroy(task.id)}
          disabled
        >
          <i className="far fa-trash-alt"></i>
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDestroy(task.id)}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      );
    }
  };

  return (
    <>
      <div className={getTaskStyle(task)} key={task.id}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={`checkbox-${task.id}`}
            value={task.id}
            checked={checked}
            onChange={handelCheck}
          />
          <label className="form-check-label h5">{task.title}</label>
        </div>
        <div>
          <button onClick={toggle} className="btn btn-primary btn-sm mr-2">
            Details
          </button>
          {renderDestroyButton()}
        </div>
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
