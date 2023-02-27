import React, { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import SyntaxHighlighter from 'react-syntax-highlighter/';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code = `function UseRefExample() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      countRef.current += 1;
      setCount(countRef.current);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleReset = () => {
    countRef.current = 0;
    setCount(0);
  };

  return (
    <p>Count: {count}</p>
  );
}`


function UseRefExample() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      countRef.current += 1;
      setCount(countRef.current);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleReset = () => {
    countRef.current = 0;
    setCount(0);
  };

  return (
    <Card variant="outlined"
      sx={{
        p: 2,
        m: 2,
      }}
      id="useRef"
    >
      <Typography variant='h6'
        sx={{
          mb: 2,
        }}
      >UseRef</Typography>
      <Typography
        sx={{
          mb: 2,
        }}

        variant="body1">
        In this example, we use the useRef hook to manage the state of the count variable. useRef works by returning a mutable ref object whose <em>.current </em>property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
        We initialize it to 0 and update it using the current property of the ref object, which is returned by useRef. We also define a handleReset function that is called when the button is clicked, which updates the count by setting the current property of the ref object.
      </Typography>
      <SyntaxHighlighter language="javascript" style={docco} children={code} showLineNumbers={true} wrapLines={true}>
      </SyntaxHighlighter>
      <Typography
        sx={{
          mb: 2,
        }}
      >Count: {count}</Typography>
      <Button variant="contained" color="primary" onClick={handleReset}>Reset</Button>
    </Card>
  );
}

export default UseRefExample;
