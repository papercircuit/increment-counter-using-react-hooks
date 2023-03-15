import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import SyntaxHighlighter from 'react-syntax-highlighter/';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
  const [highlighted, setHighlighted] = useState([]);

  const handleIncrement = () => {
    setCount(count + 1);
    handleHighlight([5,10]);
  };

  const handleHighlight = ([x, y]) => {
    setHighlighted([x, y])
    setTimeout(() => {
      setHighlighted([]);
    }, 2000);
  }

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
          mb: 2,
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

export default UseStateExample;
