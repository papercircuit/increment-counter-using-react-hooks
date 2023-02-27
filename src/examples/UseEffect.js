import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import SyntaxHighlighter from 'react-syntax-highlighter/';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code = `function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
      <p>Count: {count}</p>
  );
}`

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <React.Fragment>
      <Card sx={{
        p: 2,
        m: 2,
      }}
      >
        <Typography
          sx={{
            mb: 2,
          }}
          variant='h6'>UseEffect</Typography>
        <Typography
          sx={{
            mb: 2,
          }}
          variant="body1">
          In this example, we use the useEffect hook to increment the count variable every second. We define an effect that increments the count variable every second using setCount. We also pass an empty array as the second argument to useEffect, which means that the effect will only run once when the component mounts. If we remove the empty array, the effect will run every time the count variable is updated, which will cause an infinite loop.

        </Typography>
        <SyntaxHighlighter language="javascript" style={docco} children={code} showLineNumbers={true} wrapLines={true}>
        </SyntaxHighlighter>
        <Typography
          sx={{
            mb: 2,
          }}
        >Count: {count}</Typography>
      </Card>

    </React.Fragment>
  );
}

export default UseEffectExample;
