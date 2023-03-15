import React, { useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code = `import React, { useState, useCallback } from 'react';

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
}`


function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [highlighted, setHighlighted] = useState([]);

  const handleHighlight = ([a,b]) => {
    setHighlighted([a,b])
    setTimeout(() => {
      setHighlighted([]);
    }, 2000);
  }

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
    handleHighlight([14, 8])
  }, []);

  return (
    <Card variant="outlined"
      sx={{
        p: 2,
        m: 2
      }}
      id="useCallback"
      backgroundColor="black"
    >
      <Typography variant='h6'
        sx={{
          mb: 2,
        }}
      >UseCallback</Typography>
      <Typography variant="body1">
        In this example, the incrementCount function is only recreated when the count state changes. This is because the useCallback hook is used to memoize the function. This is useful when the function is passed as a prop to a child component. The child component will only re-render when the function changes.
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
      <Typography
        sx={{
          mt: 2,
          mb: 2
        }}
      >Count: {count}</Typography>
      <Button variant="contained" color="primary" onClick={handleIncrement}>Increment</Button>
      <Link
        sx={{
          display: 'block',
          mt: 2,
        }}
        href="#">Back to top</Link>
    </Card>
  );
}

export default UseCallbackExample;

