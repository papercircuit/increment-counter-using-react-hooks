import React, { useState, useEffect, useTransition } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code =
    `import React, { useState, useTransition } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);
      const [startTransition, isPending] = useTransition({ timeoutMs: 1000 });
      
      const increment = () => {
        startTransition(() => {
          setCount(count + 1);
        });
      };
      
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment} disabled={isPending}>
            Increment
          </button>
          {isPending ? 'Updating...' : null}
        </div>
      );
    }
    `


function UseTransitionExample() {
    const [count, setCount] = useState(0);
    const [isPending, startTransition] = useTransition({ timeoutMs: 2000 });
    const [highlighted, setHighlighted] = useState([]);
    const [pendingState, setPendingState] = useState(false);

    const handleHighlight = ([x, y, z]) => {
        setHighlighted([x, y, z])
        setTimeout(() => {
            setHighlighted([]);
        }, 2000);
    }

    const handleIncrement = () => {
      startTransition(() => {
        setCount(count + 1);
        handleHighlight([7, 9, 16]);
      });
    };

    return (
        <Card variant="outlined"
            sx={{
                p: 2,
                m: 2,
            }}
            id="useTransition"
        >
            <Typography variant='h6'
                sx={{
                    mb: 2,
                }}
            >UseTransition</Typography>
            <Typography variant='body1'
                sx={{
                    mb: 2,
                }}
            >
                In this example, the useTransition hook is used to create a transition that lasts for 1 second and shows a loading indicator during the transition. The useCounter custom hook returns an array containing the count state value, a handleIncrement function that updates the count value by 1 using startTransition, and an isPending boolean value that indicates whether a transition is currently in progress.
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
            >
                Count: {count}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleIncrement} disabled={isPending}>Increment</Button>
            {isPending ? <Typography>Updating...</Typography> : null}
            <Link
                sx={{
                    display: 'block',
                    mt: 2,
                }}
                href="#">Back to top</Link>

        </Card>
    );
}

export default UseTransitionExample;