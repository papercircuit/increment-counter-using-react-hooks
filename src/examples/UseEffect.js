import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// In this example, we use the useEffect hook to update the count state variable every second. We also define a handleIncrement function that is called when the button is clicked, which updates the count by calling setCount.

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant = 'h6'>UseEffect</Typography>
      <Typography variant="body1">
        In this example, we use the useEffect hook to update the count state variable every second. We also define a handleIncrement function that is called when the button is clicked, which updates the count by calling setCount.
      </Typography>
      <Typography>Count: {count}</Typography>
    </Box>
  );
}

export default UseEffectExample;
