import { React, useState, useContext } from "react";
import TaskList from "./TaskList";
import Search from "./Search";
import BulkAction from "./BulkAction";
import { TaskContext } from "../contexts/TaskContext";

function TasksView({ size }) {
  const { tasks, dispatch } = useContext(TaskContext);
  const [searchKey, setSearchKey] = useState("");
  const [selectedListID, setSelectedListID] = useState([]);

  const handleSearch = (searchKey) => {
    setSearchKey(searchKey);
  };

  const handleSelectList = (selected, id) => {
    if (selected) {
      setSelectedListID([...selectedListID, id]);
    } else {
      setSelectedListID(selectedListID.filter((listId) => listId !== id));
    }
  };

  const handleBulkDestroy = () => {
    dispatch({ type: "BULK_DESTROY_TASKS", selectedListID });
    setSelectedListID([]);
  };

  const handleBulkChange = () => {
    dispatch({ type: "BULK_UPDATE_TASKS", selectedListID });
    setSelectedListID([]);
  };

  return (
    <>
      <Search
        size={size}
        onSearch={handleSearch}
        selectedListID={selectedListID}
      />

      <div className="row">
        <div className="col-md-10 offset-md-1 col-sm-10 offset-sm-1">
          <BulkAction
            onDestroy={handleBulkDestroy}
            onChange={handleBulkChange}
            selectedListID={selectedListID}
          />
          <br />
          <br />
          <hr />
          <TaskList
            tasks={tasks
              .filter((task) =>
                task.title.toLowerCase().includes(searchKey.toLowerCase())
              )
              .filter((task) => task.status !== "done")
              .sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1))}
            onSelect={handleSelectList}
          />
          <hr />
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Done</h3>
          </div>
          <TaskList
            tasks={tasks
              .filter((task) =>
                task.title.toLowerCase().includes(searchKey.toLowerCase())
              )
              .filter((task) => task.status === "done")
              .sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1))}
            onSelect={handleSelectList}
          />
        </div>
      </div>
    </>
  );
}

export default TasksView;
