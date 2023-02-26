import React, { useState, useCallback, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';


function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      incrementCount();
    }, 1000);
    return () => clearInterval(interval);
  }, [incrementCount]);

  return (
    <Card variant="outlined"
      sx={{
        p: 2,
        m: 2,
      }}
    >
      <Typography variant='h6'
        sx={{
          mb: 2,
        }}
      >UseCallback</Typography>
      <Typography variant="body1">
        useCallback is typically used to memoize functions to prevent unnecessary re-renders of child components. However, we can also use it to memoize the setCount function returned by useState and increment the counter in a similar way to the previous examples. Here's an example of how to do that:

        In this example, we use useState to manage the state of the counter, and define a memoized incrementCount function using useCallback that increments the counter by 1 using the previous count value.

        We then define an effect using useEffect that calls the incrementCount function every second using setInterval. We use incrementCount as the dependency for the effect, so that it gets re-run whenever incrementCount changes.

        Finally, we render the count value in a paragraph element within a div element. The count value will increment every second due to the effect we defined with useEffect, and the incrementCount function is memoized using useCallback. Note that useCallback is not necessary for this example, but it can be useful if the function being memoized has expensive computation or needs to be passed as a prop to child components.
      </Typography>
      <Typography
        sx={{
          mt: 2,
        }}
      >Count: {count}</Typography>
    </Card>
  );
}

export default UseCallbackExample;

