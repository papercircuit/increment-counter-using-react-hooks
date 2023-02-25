import React, { useRef, useEffect } from 'react';

function UseRefExample() {
  const countRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      countRef.current += 1;
      console.log(countRef.current);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleReset = () => {
    countRef.current = 0;
    console.log(countRef.current);
  };

  return (
    <div>
      <p>Count: {countRef.current}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default UseRefExample;