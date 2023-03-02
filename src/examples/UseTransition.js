import React, { useState, useEffect, useTransition } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code =
    `import React, { useState, useTransition } from 'react';

    function useCounter() {
        const [count, setCount] = useState(0);
        const [startTransition, isPending] = useTransition({ timeoutMs: 1000 });
      
        const handleIncrement = () => {
          startTransition(() => {
            setCount(prevCount => prevCount + 1);
          });
        };
      
        useEffect(() => {
          const timeout = setTimeout(() => {
            startTransition(() => {
              setCount(prevCount => prevCount);
            });
          }, 1500);
          return () => clearTimeout(timeout);
        }, [startTransition]);
      
        return [count, handleIncrement, isPending];
      }
      
      function UseTransitionExample() {
        const [count, handleIncrement, isPending] = useCounter();
      
        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={handleIncrement}>Increment</button>
                {isPending ? ' Pending...' : null}
            </div>
            );
        }`

function useCounter() {
    const [count, setCount] = useState(0);
    const [startTransition, isPending] = useTransition({ timeoutMs: 1000 });

    const handleIncrement = () => {
        startTransition(() => {
            setCount(prevCount => prevCount + 1);
        });
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            startTransition(() => {
                setCount(prevCount => prevCount);
            });
        }, 1500);
        return () => clearTimeout(timeout);
    }, [startTransition]);

    return [count, handleIncrement, isPending];
}

function UseTransitionExample() {
    const [count, handleIncrement, isPending] = useCounter();

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
                useTransition is a hook that can be used to transition between two states in a smooth way. In this example, we can use useTransition to transition between the old and new count values as we increment the counter.
                {'\n'}{'\n'}
                In this example, we use `useState` to manage the state of the counter, and define a `startTransition` function and `isPending` flag variable using `useTransition`. We pass an options object
                to `useTransition` with a `timeoutMs` property that specifies the duration of the transition.
                In this example, the useTransition hook is used to create a transition that lasts for 1 second and shows a loading indicator during the transition. The useCounter custom hook returns an array containing the count state value, a handleIncrement function that updates the count value by 1 using startTransition, and an isPending boolean value that indicates whether a transition is currently in progress.

                The UseTransitionExample component renders the count value and a button that calls the handleIncrement function when clicked. The isPending value is used to disable the button during a transition and to show a loading indicator.

            </Typography>

            <SyntaxHighlighter language="javascript" children={code} style={agate} showLineNumbers={true} wrapLines={true}>
            </SyntaxHighlighter>

            <Typography>
                Count: {count}
            </Typography>
            <Button onClick={handleIncrement} disabled={isPending}>Increment</Button>
            {isPending && <Typography>Updating...</Typography>}
        </Card>
    );
}

export default UseTransitionExample;