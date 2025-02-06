import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="counter-container">
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Counter' : 'Show Counter'}
      </button>
      {isVisible && (
        <div>
          <h2>Counter: {count}</h2>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      )}
    </div>
  );
}