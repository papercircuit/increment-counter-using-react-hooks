import React, { useState, useEffect, useDebugValue } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useDebugValue(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return count;
}

function UseDebugValueExample() {
  const count = useCounter(0);

  return (
    <Card variant="outlined"
      sx={{
        p: 2,
        m: 2,
      }}>
      <Typography variant='h6'
        sx={{
          mb: 2
        }}
      >UseDebugValue</Typography>
      <Typography variant="body1"
        sx={{
          mb: 2
        }}
      >
        useDebugValue is a hook that can be used to display additional debugging information about a custom hook in the React DevTools. In this example, we can use useDebugValue to display the current count value in the React DevTools as we increment the counter.
        {'\n'}{'\n'}
        In this example, we define a custom hook useCounter that uses useState to manage the state of the counter and useDebugValue to display the current count value in the React DevTools. We define an effect using useEffect that increments the counter every second using setCount.
        {'\n'}{'\n'}
        We then use the useCounter custom hook in the Counter component to get the current count value and render it in a paragraph element within a div element. The count value will increment every second due to the effect we defined with useEffect, and the useDebugValue hook will display the current count value in the React DevTools.
      </Typography>
      <Typography>Count: {count}</Typography>
    </Card>
  );
}

export default UseDebugValueExample;

