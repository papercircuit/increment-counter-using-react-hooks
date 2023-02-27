import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import SyntaxHighlighter from 'react-syntax-highlighter/';
import Button from '@mui/material/Button';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code =
  `function UseEffectCounter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log('Count has changed: \${count}');
  }, [count]);

  const handleButtonClick = () => {
    if(text !== "Button clicked") {
    setText("Button clicked");
    } else {
      setText("Click the button to see the count change");
    }
  };

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

  const handleButtonClick = () => {
    if (text !== "Button clicked") {
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
    <React.Fragment>
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
          In this example we are using the useEffect hook to update the count state variable every time the text state variable changes. This is a simple example of how useEffect can be used to trigger a state change when a different state variable changes.
        </Typography>
        <SyntaxHighlighter language="javascript" style={docco} children={code} showLineNumbers={true} wrapLines={true}>
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
      </Card>

    </React.Fragment>
  );
}

export default UseEffectExample;
