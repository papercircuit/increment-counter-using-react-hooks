import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import SyntaxHighlighter from 'react-syntax-highlighter/';
import Button from '@mui/material/Button';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code =
  `function UseEffectCounter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleButtonClick = () => {
    if(text !== "Button clicked") {
    setText("Button clicked");
    } else {
      setText("Click the button to see the count change");
    }
  };

  useEffect(() => {
    // this will run every time the text changes and the count will be incremented
    setCount(count + 1);
  }, [text]);


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}`

function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Click the button to see the count change");
  const [highlighted, setHighlighted] = useState([]);

  const handleButtonClick = () => {

    if (text !== "Button clicked") {
      setText("Button clicked");
      handleHighlight([11, 15, 20]);
    } else {
      setText("Click the button to see the count change");
      handleHighlight([13, 15, 20]);
    }
  };

  const handleHighlight = ([a, b, c]) => {
    setHighlighted([a, b, c])
    setTimeout(() => {
      setHighlighted([]);
    }, 2000);
  }

  useEffect(() => {
    // this will run every time the text changes and the count will be incremented
    setCount(count + 1);
  }, [text]);

  return (
    <Card sx={{
      p: 2,
      m: 2,
    }}
      id="useEffect"
    >
      <Typography
        sx={{
          mb: 2,
        }}
        variant='h6'>UseEffect</Typography>
      <Typography
        sx={{
          mb: 2,
        }}
        variant="body1">
        In this example we are using the useEffect hook to update the count state variable every time the text state variable changes. This is a simple example of how useEffect can be used to trigger a state change when a different state variable changes. In other words, the count state variable is <em>dependent</em> on the text state variable.
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
      <Typography
        sx={{
          mb: 2,
        }}
      >{text}</Typography>
      <Button variant="contained" onClick={handleButtonClick}>Incrememnt</Button>
      <Link
        sx={{
          display: 'block',
          mt: 2,
        }}
        href="#">Back to top</Link>
    </Card>
  );
}

export default UseEffectExample;
