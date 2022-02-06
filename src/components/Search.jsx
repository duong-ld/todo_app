import { Collapse } from "react-collapse";
import { useState } from "react";
import Form from "./Form";

const Search = ({ size, onSearch, onStore }) => {
  const [open, setOpen] = useState(false);
  const handelSearch = (e) => {
    e.preventDefault();
    const search = e.target.value;
    onSearch(search);
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

  const handelStore = (task) => {
    onStore(task);
    setOpen(false);
  };

  return (
    <div className="container pt-3">
      <div className="d-flex justify-content-start col-md-10 offset-md-1 col-sm-10 offset-sm-1 mb-2">
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          onChange={handelSearch}
        />
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
