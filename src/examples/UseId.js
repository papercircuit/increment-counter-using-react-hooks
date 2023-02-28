import React, { useState, useId } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code =
    `import React, { useState, useId } from 'react';

    function UseIdExample() {
        const [count, setCount] = useState(0);
        const [buttonId] = useId();
    
        function handleClick() {
            setCount(prevCount => prevCount + 1);
        }
    
        return (
            <div>
                <p>Count: {count}</p>
                <button id={buttonId} onClick={handleClick}>Increment count</button>
            </div>
        );
    }`

function UseIdExample() {
    const [count, setCount] = useState(0);
    const uniqueId = useId();

    const handleClick = (event) => {
        if (event.target.id === uniqueId) {
            setCount(count + 1);
        }
    };

    return (
        <Card variant="outlined"
            sx={{
                p: 2,
                m: 2,
            }}
            id="useId"
        >
            <Typography variant='h6'
                sx={{
                    mb: 2,
                }}
            >UseId</Typography>
            <Typography variant="body1">
                useId is a hook that generates a unique id for a component. It is useful for components that need to be referenced by id, such as a button or input. We can use the id to ensure that only the intended component is updated when a user clicks on it.
            </Typography>
            <SyntaxHighlighter language="javascript" style={ agate } children={code} showLineNumbers={true} wrapLines={true}>
            </SyntaxHighlighter>
            <Typography variant="body1" htmlFor={uniqueId}
                sx={{
                    mt: 2,
                }}
            >Count: {count}</Typography>
            <Button id={uniqueId} variant="contained" color="primary" onClick={handleClick}>
                Increment
            </Button>

        </Card>
    );
}

export default UseIdExample;
