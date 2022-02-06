import { Collapse } from "react-collapse";
import { useContext, useState } from "react";
import Form from "./Form";
import { TaskContext } from "../contexts/TaskContext";

const Search = ({ size, onSearch, selectedListID }) => {
  const { dispatch } = useContext(TaskContext);
  const [open, setOpen] = useState(false);

  const handelSearch = (e) => {
    e.preventDefault();
    const searchKey = e.target.value;
    onSearch(searchKey);
  };

  const handelStore = (task) => {
    dispatch({ type: "STORE_TASK", task });
    setOpen(false);
  };

  const renderSearchInput = () => {
    if (selectedListID.length === 0) {
      return (
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          onChange={handelSearch}
        />
      );
    } else {
      return (
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          disabled
          onChange={handelSearch}
        />
      );
    }
  };

  const renderAddButton = () => {
    if (size === "small") {
      return (
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <i className="far fa-calendar-plus fa-2x"></i>
        </button>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="container pt-3">
      <div className="d-flex justify-content-start col-md-10 offset-md-1 col-sm-10 offset-sm-1 mb-2">
        {renderSearchInput()}
        {renderAddButton()}
      </div>
      <Collapse isOpened={open}>
        <div className="container p-3 border">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <Form action={handelStore} actionName={"Store"} />
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Search;
