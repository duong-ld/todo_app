const FunctionButton = ({ task, checked, onDestroy, toggleDetail }) => {
  const renderDestroyButton = () => {
    return checked ? (
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDestroy(task.id)}
        disabled
      >
        <i className="far fa-trash-alt"></i>
      </button>
    ) : (
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDestroy(task.id)}
      >
        <i className="far fa-trash-alt"></i>
      </button>
    );
  };

  return (
    <div>
      <button onClick={toggleDetail} className="btn btn-primary btn-sm mr-2">
        Details
      </button>
      {renderDestroyButton()}
    </div>
  );
};

export default FunctionButton;
