import NewTask from "../components/NewTask";
import TasksView from "../components/TasksView";


const Tasks = ({ size }) => {
  return size === "small" ? (
    <div className="p-3">
      <div className="d-flex justify-content-center">
        <div style={{ width: "100%" }}>
          <TasksView size={size} />
        </div>
      </div>
    </div>
  ) : (
    <div className="p-3">
      <div className="d-flex justify-content-center">
        <div style={{ width: "50%", borderRight: "1px solid" }}>
          <TasksView size={size} />
        </div>
        <div style={{ width: "40%" }}>
          <NewTask />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
