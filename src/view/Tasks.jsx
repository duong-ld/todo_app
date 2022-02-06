import { useState, useEffect } from "react";
import NewTask from "../components/NewTask";
import TasksView from "../components/TasksView";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Tasks = ({ size }) => {
  const [tasks, setTasks] = useState(() => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleStore = (task) => {
    // add id to task
    const id = localStorage.getItem("id");
    task.id = id ? parseInt(id) + 1 : 1;
    localStorage.setItem("id", task.id);
    setTasks([...tasks, task]);
    toast.success(`Task #${task.title} added successfully`);
  };

  const handleDestroy = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    toast.success("Task deleted successfully");
  };

  const handleUpdate = (task) => {
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    });
    setTasks(newTasks);
    toast.success(`Task #${task.title} updated successfully`);
  };

  const bulkDestroy = (selectedList) => {
    const newTasks = tasks.filter((task) => !selectedList.includes(task.id));
    setTasks(newTasks);
    toast.success("Task(s) deleted successfully");
  };

  const bulkChange = (selectedList) => {
    const newTasks = tasks.map((task) => {
      if (selectedList.includes(task.id)) {
        if (task.status === "done") {
          task.status = "todo";
        } else {
          task.status = "done";
        }
      }
      return task;
    });
    setTasks(newTasks);
    toast.success("Task(s) changed successfully");
  };

  const renderView = () => {
    if (size === "small") {
      return (
        <div style={{ width: "100%" }}>
          <TasksView
            tasks={tasks}
            size={size}
            onDestroy={handleDestroy}
            onUpdate={handleUpdate}
            onStore={handleStore}
            bulkDestroy={bulkDestroy}
            bulkChange={bulkChange}
          />
        </div>
      );
    } else {
      return (
        <>
          <div style={{ width: "50%", borderRight: "1px solid" }}>
            <TasksView
              tasks={tasks}
              size={size}
              onDestroy={handleDestroy}
              onUpdate={handleUpdate}
              onStore={handleStore}
              bulkDestroy={bulkDestroy}
              bulkChange={bulkChange}
            />
          </div>
          <div style={{ width: "40%" }} className="border pb-3 m-3">
            <NewTask onStore={handleStore} />
          </div>
        </>
      );
    }
  };

  return (
    <div className="p-3">
      <div className="d-flex justify-content-center">{renderView()}</div>
    </div>
  );
};

export default Tasks;
