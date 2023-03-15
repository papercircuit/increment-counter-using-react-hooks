import React, { useState, useEffect, useDebugValue } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code = `
import React, { useState, useEffect, useDebugValue } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);

  useDebugValue(count);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return [count, handleIncrement];
}

function UseDebugValueExample() {
  const [count, handleIncrement] = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}`

function useCounter() {
  const [count, setCount] = useState(0);

  useDebugValue(count);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return [count, handleIncrement];
}

function UseDebugValueExample() {
  const [count, handleIncrement] = useCounter();
  const [highlighted, setHighlighted] = useState([]);

  const handleHighlight = ([x, y, z]) => {
    setHighlighted([x, y, z])
    setTimeout(() => {
      setHighlighted([]);
    }, 2000);
  }

  useEffect(() => {
    handleHighlight([7, 10, 22]);
  }, [count]);


  return (
    <Card variant="outlined"
      sx={{
        p: 2,
        m: 2
      }}
      id="useDebugValue"
    >
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
      </Typography>
      <SyntaxHighlighter language="javascript" style={agate} children={code} showLineNumbers={true} wrapLines={true} lineProps={lineNumber => {
        let style = { display: 'block' };
        if (highlighted.includes(lineNumber)) {
          style.backgroundColor = 'rgba(255, 255, 0, 0.2)';
          // add transition in and out
          style.transition = 'background-color .1s ease-in-out';
        }
        return { style };
      }
      }>
      </SyntaxHighlighter>
      <Typography>Count: {count}</Typography>
      <Button variant="contained"
        sx={{
          mt: 2
        }}
        onClick={handleIncrement}
      >Increment</Button>
      <Link
        sx={{
          display: 'block',
          mt: 2,
        }}
        href="#">Back to top</Link>
    </Card>

  );
}

export default UseDebugValueExample;

