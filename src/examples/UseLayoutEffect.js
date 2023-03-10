import React, { useState, useLayoutEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const code = `
function UseLayoutEffectExample() {
  const [count, setCount] = useState(0);

  const countRef = useRef(count);

  useLayoutEffect(() => {
    console.log('Layout effect executed');
    setCount(countRef.current);
  }, [count]);

  const handleIncrement = () => {
    countRef.current = countRef.current + 1;
    setCount(countRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}`


function UseLayoutEffectExample() {
  const [count, setCount] = useState(0);
  const [highlighted, setHighlighted] = useState([]);

  const countRef = useRef(count);

  useLayoutEffect(() => {
    console.log('Layout effect executed');
    setCount(countRef.current);
  }, [count]);

  const handleIncrement = () => {
    countRef.current = countRef.current + 1;
    setCount(countRef.current);
  };

  return (
    <Card variant='outlined'
      sx={{
        p: 2,
        m: 2,
      }}
      id="useLayoutEffect"
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
        In this example, the useLayoutEffect hook is used to update the state of the component with the latest value of the countRef variable, which is updated on button click. The useLayoutEffect hook is executed after the render phase and before the browser repaints, allowing the component to have the latest state value before the next repaint. The hook is triggered whenever the count state value changes, ensuring that the component is always up-to-date.
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
      <Button variant='contained'
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

export default UseLayoutEffectExample;
