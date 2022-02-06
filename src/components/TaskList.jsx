import TaskPreview from "./task_preview/TaskPreview";

const TaskList = ({ tasks, onSelect }) => {
  return tasks.length !== 0 ? (
    <div>
      {tasks.map((task) => (
        <TaskPreview key={task.id} task={task} onSelect={onSelect} />
      ))}
    </div>
  ) : (
    <div
      style={{ marginLeft: "auto", marginRight: "auto" }}
      className="alert alert-info mt-3 w-50"
      role="alert"
    >
      No tasks to show
    </div>
  );
};

export default TaskList;
