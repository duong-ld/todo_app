import { toast } from "react-toastify";

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "STORE_TASK":
      toast.success(`Task #${action.task.title} added successfully`, {
        toastId: "store" + action.task.id,
      });
      return [...state, action.task];

    case "UPDATE_TASK":
      toast.success(`Task #${action.task.title} updated successfully`, {
        toastId: "update" + action.task.id,
      });
      return state.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        }
        return t;
      });

    case "DESTROY_TASK":
      toast.success("Task deleted successfully", {
        toastId: "destroy" + action.id,
      });
      return state.filter((t) => t.id !== action.id);

    case "BULK_DESTROY_TASKS":
      toast.success("Task(s) deleted successfully", {
        toastId: "destroy" + action.selectedListID.join(","),
      });
      return state.filter((t) => !action.selectedListID.includes(t.id));

    case "BULK_UPDATE_TASKS":
      toast.success("Task(s) updated successfully", {
        toastId: "update" + action.selectedListID.join(","),
      });
      return state.map((t) => {
        if (action.selectedListID.includes(t.id)) {
          if (t.status === "done") {
            t.status = "todo";
          } else {
            t.status = "done";
          }
        }
        return t;
      });

    default:
      return state;
  }
};
