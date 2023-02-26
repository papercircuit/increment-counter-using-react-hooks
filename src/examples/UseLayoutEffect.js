import React, { useState, useLayoutEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

function UseLayoutEffectExample() {
  const [count, setCount] = useState(0);

  const countRef = useRef(count);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      countRef.current = countRef.current + 1;
      setCount(countRef.current);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card variant='outlined'
      sx={{
        p: 2,
        m: 2,
      }}
    >
      <Typography variant='h6'
        sx={{
          mb: 2,
        }}
      >UseLayoutEffect</Typography>
      <Typography variant="body1"
        sx={{
          mb: 2,
        }}
      >
        In this example, we use useState to manage the state of the counter, and define a countRef using useRef to keep track of the current count value.

        We then define a useLayoutEffect hook that runs after all DOM mutations, similar to componentDidMount in class components. This effect initializes an interval using setInterval that increments the countRef.current value every second and sets the state of the counter using setCount. We use an empty dependency array [] for this effect, so that it runs only once when the component mounts.

        Finally, we render the count value in a paragraph element within a div element. The count value will increment every second due to the effect we defined with useLayoutEffect, and the countRef variable is used to keep track of the current count value. Note that useLayoutEffect is not necessary for this example, but it can be useful in certain situations where we need to perform DOM mutations synchronously.
      </Typography>
      <Typography>Count: {count}</Typography>
    </Card>
  );
}

export default UseLayoutEffectExample;
