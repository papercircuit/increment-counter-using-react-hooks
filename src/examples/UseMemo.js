import React, { useState, useMemo } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';  

const code = `import { useState, useMemo } from 'react';

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  const incrementCounter = useMemo(() => {
    console.log('Calculating next count value');
    return count + 1;
  }, [count]);

  const handleIncrement = () => {
    setButtonClicked(true);
  };

  useMemo(() => {
    console.log('Updating count value');
    if (buttonClicked) {
      setCount(incrementCounter);
      setButtonClicked(false);
    }
  }, [buttonClicked, incrementCounter]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}`

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [highlighted, setHighlighted] = useState([]);


  const incrementCounter = useMemo(() => {
    console.log('Calculating next count value');
    return count + 1;
  }, [count]);

  const handleIncrement = () => {
    setButtonClicked(true);
  };
  
  useMemo(() => {
    console.log('Updating count value');
    if (buttonClicked) {
      setCount(incrementCounter);
      setButtonClicked(false);
    }
  }, [buttonClicked, incrementCounter]);

  return (
    <Card variant="outlined"
      sx={{
        p: 2,
        m: 2,
      }}
      id="useMemo"
    >
      <Typography variant='h6'
        sx={{
          mb: 2,
        }}
      >UseMemo</Typography>
      <Typography variant="body1"
        sx={{
          mb: 2,
        }}
      >
        Here we are using the useMemo hook to calculate the next count value. We are also using the useMemo hook to update the count value. This is a more efficient way to update the count value because we are only updating the count value when the button is clicked. 
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
      <Button variant="contained" color="primary" id="increment-button" onClick={handleIncrement}>Increment</Button>
      <Link
        sx={{
          display: 'block',
          mt: 2,
        }}
        href="#">Back to top</Link>
    </Card>
  );
}

export default UseMemoExample;
