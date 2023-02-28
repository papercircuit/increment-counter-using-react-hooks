import React, { createContext, useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/';
import {  agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code = `
import React, { createContext, useContext, useState } from 'react';
const CountContext = createContext();

function UseContextExample() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
    <BoxElement />
    </CountContext.Provider>
  );

  function BoxElement() {
    const { count, setCount } = useContext(CountContext);
  
    const handleIncrement = () => {
      setCount(count + 1);
    };

    return (
    <p>Count: {count}</p>
    <button onClick={handleIncrement}>Increment count</button>
    );
  }
}`


const CountContext = createContext();

function UseContextExample() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <BoxElement />
    </CountContext.Provider>
  );
}

function BoxElement() {
  const { count, setCount } = useContext(CountContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <Card variant="outlined"
      sx={{
        p: 2,
        m: 2,
      }}
      id="useContext"
    >

      <Typography variant='h6'>UseContext</Typography>
      <Typography variant="body1"
        sx={{
          mb: 2,
        }}
      >
        In this example, we use the useContext hook to pass the count to the BoxElement component. The Box Element is a child of the UseContextExample componentt, but it is not a direct child. The BoxElement component is a child of the CountContext.Provider component. The useContext hook allows us to access the count and setCount functions from the CountContext.Provider component. This is useful when we want to pass data to a component that is not a direct child of the component that contains the data. 
      </Typography>
      <SyntaxHighlighter language="javascript" style={ agate } children={code} showLineNumbers={true} wrapLines={true}>
      </SyntaxHighlighter>
      <Typography
        sx={{
          mb: 2,
        }}
      >Count: {count}</Typography>
      <Button variant="contained" color="primary" onClick={handleIncrement}>Increment</Button>
    </Card>
  );
}

export default UseContextExample;
