const CheckBox = ({ task, checked, handelCheck }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={`checkbox-${task.id}`}
        value={task.id}
        checked={checked}
        onChange={handelCheck}
      />
      <label className="form-check-label h5">{task.title}</label>
    </div>
  );
};

export default CheckBox;
