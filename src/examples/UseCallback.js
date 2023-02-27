import React, { useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code = `
import React, { useState, useCallback } from 'react';

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment count</button>
    </div>
  );
}
`


function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <Card variant="outlined"
      sx={{
        p: 2,
        m: 2
      }}
      id="useCallback"
    >
      <Typography variant='h6'
        sx={{
          mb: 2,
        }}
      >UseCallback</Typography>
      <Typography variant="body1">
        In this example, the incrementCount function is only recreated when the count state changes. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).
      </Typography>
      <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
      <Typography
        sx={{
          mt: 2,
        }}
      >Count: {count}</Typography>
      <Button variant="contained" color="primary" onClick={handleIncrement}>Increment</Button>
    </Card>

  );
}

export default UseCallbackExample;

