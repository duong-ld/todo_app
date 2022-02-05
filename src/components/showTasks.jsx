import { React, useState, useCallback } from "react";
import TasksList from "./tasksList";
import Search from "./search";
import BulkAction from "./bulkAction";

function ShowTasks({
  size,
  tasks,
  onUpdate,
  onDestroy,
  onStore,
  bulkDestroy,
  bulkChange,
}) {
  const [searchKey, setSearchKey] = useState("");
  const [selectedList, setSelectedList] = useState([]);

  const handleSearch = (searchKey) => {
    setSearchKey(searchKey);
  };

  const handleSelectList = useCallback(
    (selected, id) => {
      if (selected) {
        setSelectedList([...selectedList, id]);
      } else {
        setSelectedList(selectedList.filter((listId) => listId !== id));
      }
    },
    [selectedList]
  );

  const handleBulkDestroy = () => {
    bulkDestroy(selectedList);
    setSelectedList([]);
  };

  const handleBulkChange = () => {
    bulkChange(selectedList);
    setSelectedList([]);
  };

  return (
    <>
      <Search size={size} onSearch={handleSearch} onStore={onStore} />

      <div className="row">
        <div className="col-md-10 offset-md-1 col-sm-10 offset-sm-1">
          <BulkAction
            onDestroy={handleBulkDestroy}
            onChange={handleBulkChange}
            selectedList={selectedList}
          />
          <br />
          <br />
          <hr />
          <TasksList
            tasks={tasks
              .filter((task) =>
                task.title.toLowerCase().includes(searchKey.toLowerCase())
              )
              .filter((task) => task.status !== "done")
              .sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1))}
            onDestroy={onDestroy}
            onUpdate={onUpdate}
            onSelect={handleSelectList}
          />
          <hr />
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Done</h3>
          </div>
          <TasksList
            tasks={tasks
              .filter((task) =>
                task.title.toLowerCase().includes(searchKey.toLowerCase())
              )
              .filter((task) => task.status === "done")
              .sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1))}
            onDestroy={onDestroy}
            onUpdate={onUpdate}
            onSelect={handleSelectList}
          />
        </div>
      </div>
    </>
  );
}

export default ShowTasks;
