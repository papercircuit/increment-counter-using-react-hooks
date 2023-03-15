import React, { useState, useEffect, useDeferredValue } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code = `
function UseDeferredValueExample() {
  const [count, setCount] = useState(0);
  const deferredCount = useDeferredValue(count);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {deferredCount}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}`


function UseDeferredValueExample() {
  const [count, setCount] = useState(0);
  const [highlighted, setHighlighted] = useState([]);
  const deferredCount = useDeferredValue(count);

  const handleHighlight = ([x, y]) => {
    setHighlighted([x, y])
    setTimeout(() => {
      setHighlighted([]);
    }, 2000);
  }

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    handleHighlight([7, 13]);
  };

  return (
    <Card variant="outlined"
      sx={{
        p: 2,
        m: 2,
      }}
      id="useDeferredValue"
    >
      <Typography variant='h6'
        sx={{
          mb: 2,
        }}
      >UseDefferedValue</Typography>
      <Typography variant="body1"
        sx={{
          mb: 2,
        }}
      >
        In this example, we initialize the counter state to 0 using useState. We use useDeferredValue to create a deferredCount value that is updated asynchronously after a specified delay (default 500ms). We attach the handleIncrement function to the button's onClick event, which updates the count state by incrementing it by 1.
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
      <Typography>Count: {deferredCount}</Typography>
      <Button variant="contained"
        sx={{
          mt: 2,
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

export default UseDeferredValueExample;
