import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import SyntaxHighlighter from 'react-syntax-highlighter/';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code = `function UseStateCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <p>Count: {count}</p>
    <button onClick={handleIncrement}>Increment</button>
  );
}`

function UseStateExample() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <Card variant="outlined"
      sx={{
        p: 2,
        m: 2,
      }}
      id="useState"
    >
      <Typography variant='h6'
        sx={{
          mb: 2,
        }}
      >UseState</Typography>
      <Typography variant="body1"
        sx={{
          mb: 2,
        }}
      >
        In this example, we use the useState hook to manage the state of the count variable. We initialize it to 0 and update it using the setCount function, which is returned by useState. We also define a handleIncrement function that is called when the button is clicked, which updates the count by calling setCount.
      </Typography>
      <SyntaxHighlighter language="javascript" style={docco} children={code} showLineNumbers={true} wrapLines={true}>
      </SyntaxHighlighter>
      <Typography variant="h6"
        sx={{
          mb: 2,
        }}
      >Count: {count}</Typography>
      <Button variant="contained" color="primary" onClick={handleIncrement}>Increment</Button>
    </Card>
  );
}

export default UseStateExample;
