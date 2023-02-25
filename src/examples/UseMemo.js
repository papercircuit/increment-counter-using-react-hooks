// useMemo is generally used for memoization and caching computed values, and is not typically used for incrementing a counter. However, we can use it to compute and cache the next value of the counter to be displayed. Here's an example of how to do that:

import React, { useState, useMemo, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

// In this example, we use useState to manage the state of the counter, and define a memoized nextCount value using useMemo that computes the next value of the counter to be displayed.

// We then define an effect using useEffect that sets the state of the counter to nextCount every second using setInterval. We use nextCount as the dependency for the effect, so that it gets re-run whenever nextCount changes.

// Finally, we render the count value in a paragraph element within a div element. The count value will increment every second due to the effect we defined with useEffect, and the next value of the counter to be displayed is computed and cached using useMemo. Note that useMemo is not necessary for this example, but it can be useful if the computation of the next value is expensive and needs to be memoized for performance reasons.

function UseMemoExample() {
  const [count, setCount] = useState(0);

  const nextCount = useMemo(() => count + 1, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(nextCount);
    }, 1000);
    return () => clearInterval(interval);
  }, [nextCount]);

  return (
    <Card variant = "outlined">
      <Typography variant = 'h6'>UseMemo</Typography>
      <Typography>Count: {count}</Typography>
    </Card>
  );
}

export default UseMemoExample;
