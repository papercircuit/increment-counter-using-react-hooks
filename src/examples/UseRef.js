import React, { useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

function UseRefExample() {
  const countRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      countRef.current += 1;
      console.log(countRef.current);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleReset = () => {
    countRef.current = 0;
    console.log(countRef.current);
  };

  return (
    <Card variant="outlined">
      <Typography variant = 'h6'>UseRef</Typography>
      <Typography>Count: {countRef.current}</Typography>
      <Button variant="contained" color="primary"  onClick={handleReset}>Reset</Button>
    </Card>
  );
}

export default UseRefExample;