import "./Counter.css";

const Counter = ({ count, increment }) => {
  const addCount = () => {
    increment();
  };

  return (
    <div className="counter">
      <div>
        Count: <span>{count}</span>
      </div>
      <button onClick={addCount}>Increment</button>
    </div>
  );
};

export default Counter;
