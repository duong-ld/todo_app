const BulkAction = ({ selectedListID, onDestroy, onChange }) => {
  if (selectedListID.length === 0) {
    return null;
  }
  return (
    <div
      style={{ position: "absolute" }}
      className="container d-flex justify-content-end m-2"
    >
      <div className="mr-3">
        <h6>{selectedListID.length} task(s) selected</h6>
      </div>
      <button
        onClick={() => onChange(selectedListID)}
        className="btn btn-primary btn-sm mr-2"
      >
        Change Status
      </button>
      <button
        onClick={() => onDestroy(selectedListID)}
        className="btn btn-danger btn-sm mr-4"
      >
        Remove
      </button>
    </div>
  );
};

export default BulkAction;
