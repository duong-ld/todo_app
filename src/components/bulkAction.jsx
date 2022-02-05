const BulkAction = ({ selectedList, onDestroy, onChange }) => {
  if (selectedList.length === 0) {
    return null;
  }
  return (
    <div
      style={{ position: "absolute" }}
      className="container d-flex justify-content-end m-2"
    >
      <div className="mr-3">
        <h6>{selectedList.length} task(s) selected</h6>
      </div>
      <button
        onClick={() => onChange(selectedList)}
        className="btn btn-primary btn-sm mr-2"
      >
        Change Status
      </button>
      <button
        onClick={() => onDestroy(selectedList)}
        className="btn btn-danger btn-sm mr-4"
      >
        Remove
      </button>
    </div>
  );
};

export default BulkAction;
