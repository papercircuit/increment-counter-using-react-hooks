import React, { useState, useLayoutEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const code = `function UseLayoutEffectExample() {
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

  const handleHighlight = ([x, y, z]) => {
    setHighlighted([x, y, z])
    setTimeout(() => {
      setHighlighted([]);
    }, 2000);
  }

  useLayoutEffect(() => {
    console.log('Layout effect executed');
    setCount(countRef.current);
  }, [count]);

  const handleIncrement = () => {
    countRef.current = countRef.current + 1;
    setCount(countRef.current);
    handleHighlight([8, 13, 19]);
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
        In this code, the useLayoutEffect hook is used to update the count state to match the value stored in countRef.current. Since useLayoutEffect is called after all DOM mutations are complete, it ensures that the updated count value is applied before the browser paints the changes to the screen, avoiding any visual glitches or inconsistencies.
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
