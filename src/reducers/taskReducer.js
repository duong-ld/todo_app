import { toast } from "react-toastify";

export const taskReducer = (state, action) => {
	let newState;

  switch (action.type) {
    case "STORE_TASK":
      toast.success(`Task #${action.task.title} added successfully`);
			return [...state, action.task];
		
    case "UPDATE_TASK":
      toast.success(`Task #${action.task.title} updated successfully`);
      newState = state.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        }
        return t;
      });
			return newState;
		
    case "DESTROY_TASK":
      toast.success("Task deleted successfully");
      newState = state.filter((t) => t.id !== action.id);
			return newState;
		
    case "BULK_DESTROY_TASKS":
      toast.success("Task(s) deleted successfully");
      newState = state.filter(
        (t) => !action.selectedListID.includes(t.id)
      );
			return newState;
		
    case "BULK_UPDATE_TASKS":
      toast.success("Task(s) updated successfully");
      newState = state.map((t) => {
        if (action.selectedListID.includes(t.id)) {
          if (t.status === "done") {
            t.status = "todo";
          } else {
            t.status = "done";
          }
        }
        return t;
      });
			return newState;
		
    default:
      return state;
  }
};
