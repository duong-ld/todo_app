import TaskPreview from "./taskPreview";

const TasksList = ({ tasks, onDestroy, onUpdate, onSelect }) => {
  if (tasks.length === 0) {
    return (
      <div
        style={{ marginLeft: "auto", marginRight: "auto" }}
        className="alert alert-info mt-3 w-50"
        role="alert"
      >
        No tasks to show
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskPreview
          key={task.id}
          task={task}
          onDestroy={onDestroy}
          onUpdate={onUpdate}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default TasksList;
