import React, { useState, useEffect, useDeferredValue } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// useDeferredValue is a hook that can be used to defer updates to a value until a later time. In this example, we can use useDeferredValue to defer updates to the count value by one second.

// In this example, we use useState to manage the state of the counter, and define a deferredCount variable using useDeferredValue to defer updates to the count value by one second. We pass an options object { timeoutMs: 1000 } to specify the timeout period for deferring updates.

// We then define an effect using useEffect that increments the counter every second using setCount.

// Finally, we render the deferredCount value in a paragraph element within a div element. The count value will increment every second due to the effect we defined with useEffect, but the deferredCount value will only update after one second due to the useDeferredValue hook.

function Counter() {
  const [count, setCount] = useState(0);
  const deferredCount = useDeferredValue(count, { timeoutMs: 1000 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Count: {deferredCount}</p>
    </div>
  );
}
