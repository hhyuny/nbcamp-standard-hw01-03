import "./Status.css";

const Status = ({ count }) => {
  return (
    <div>
      <p className="status">{count > 10 ? "High count!" : "Keep counting..."}</p>
    </div>
  );
};

export default Status;
