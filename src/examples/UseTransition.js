import React, { useState, useEffect, useTransition } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import SyntaxHighlighter from 'react-syntax-highlighter';



function UseTransitionExample() {
    const [count, setCount] = useState(0);
    const [isPending, startTransition] = useTransition({
        timeoutMs: 1000
    });

    useEffect(() => {
        const interval = setInterval(() => {
            startTransition(() => {
                setCount(prevCount => prevCount + 1);
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [startTransition]);

    return (
        <Card variant="outlined">
            <Typography variant='h6'>UseTransition</Typography>
            <Typography>
                Count: {isPending ? count - 1 : count}
                {isPending && ' (updating...)'}
            </Typography>
            <Typography variant='body1'>
                
                    useTransition is a hook that can be used to transition between two states in a smooth way. In this example, we can use useTransition to transition between the old and new count values as we increment the counter.

                    In this example, we use `useState` to manage the state of the counter, and define a `startTransition` function and `isPending` flag variable using `useTransition`. We pass an options object `
                    <SyntaxHighlighter language="javascript">
                      ADD CURLY BRACES  timeoutMs: 1000
                    </SyntaxHighlighter>

                    ` to specify the timeout period for the transition.

                    We then define an effect using `useEffect` that increments the counter every second using `setCount` wrapped in `startTransition`. This will trigger a transition between the old and new count values.

                    Finally, we render the `count` value in a paragraph element within a `div` element. We also render an "updating..." message when the `isPending` flag is true, indicating that a transition is in progress.
                
            </Typography>
        </Card>
    );
}

export default UseTransitionExample;