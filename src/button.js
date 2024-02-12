import React, { useState } from 'react';

const Button = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default Button;
