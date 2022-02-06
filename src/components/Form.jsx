import React, { Component } from "react";
import { toast } from "react-toastify";
import { v1 as uuid } from "uuid";

class Form extends Component {
  constructor(props) {
    super(props);
    var date = new Date();
    var task = props.task;

    this.state = {
      id: task ? task.id : uuid(),
      title: task ? task.title : "",
      description: task ? task.description : "",
      dueDate: task ? task.dueDate : date.toISOString().split("T")[0],
      priority: task ? task.priority : "Medium",
      status: task ? task.status : "todo",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title.trim()) {
      toast.error("Title is required");
      return;
    }
    if (this.state.dueDate < new Date().toISOString().split("T")[0]) {
      toast.error("Due date cannot be in the past");
      return;
    }

    const newTask = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
      priority: this.state.priority,
      status: this.state.status,
    };

    this.props.action(newTask);

    // if action is store reset form
    if (this.props.actionName === "Store") {
      this.setState({
        id: uuid(),
        title: "",
        description: "",
        dueDate: new Date().toISOString().split("T")[0],
        priority: "Medium",
        status: "todo",
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            type={"text"}
            className="form-control"
            name={"title"}
            value={this.state.title}
            placeholder="Task Title"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label style={{ fontWeight: "bold", float: "left" }}>
            Description
          </label>
          <textarea
            type={"text-aria"}
            className="form-control"
            name={"description"}
            value={this.state.description}
            placeholder="Enter description"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label style={{ fontWeight: "bold", float: "left" }}>Due Date</label>
          <input
            type={"date"}
            className="form-control"
            name={"dueDate"}
            value={this.state.dueDate}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label style={{ fontWeight: "bold", float: "left" }}>Priority</label>
          <select
            className="form-control"
            name={"priority"}
            value={this.state.priority}
            onChange={this.handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button className="btn btn-primary mt-3 w-100">
          {this.props.actionName}
        </button>
      </form>
    );
  }
}

export default Form;
