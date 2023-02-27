import React, { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import SyntaxHighlighter from 'react-syntax-highlighter/';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code = `function UseRefExample() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleButtonClick = () => {
    countRef.current += 1;
    setCount(countRef.current);
  };

  const handleReset = () => {
    countRef.current = 0;
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increment count</button>
      <button onClick={handleReset}>Reset count</button>
    </div>
  );
}`


function UseRefExample() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

 const handleIncrement = () => {
    countRef.current += 1;
    setCount(countRef.current);
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
        useRef is a hook that allows you to create a mutable ref object that persists for the full lifetime of the component. It is useful for storing a value that can be accessed throughout the component without causing a re-render. In this example, we are using it to store the count value so that we can increment it without causing a re-render.
        In this example, we use the useRef hook to store the count value. We initialize it to 0 and update it using the countRef.current variable. We also define a handleIncrement function that is called when the button is clicked, which updates the count by calling setCount.
      </Typography>
      <SyntaxHighlighter language="javascript" style={docco} children={code} showLineNumbers={true} wrapLines={true}>
      </SyntaxHighlighter>
      <Typography
        sx={{
          mb: 2,
        }}
      >Count: {count}</Typography>
      <Button variant="contained" color="primary" onClick={handleIncrement}>Increment</Button>
    </Card>
  );
}

export default UseRefExample;
