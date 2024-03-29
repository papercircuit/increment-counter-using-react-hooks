import React, { useState, useId } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code =
    `import React, { useState, useId } from 'react';

    function UseIdExample() {
        const [count, setCount] = useState(0);
        const [buttonId] = useId();
    
        function handleClick() {
            if (event.target.id === uniqueId) {
            setCount(prevCount => prevCount + 1);
            }
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
    const [highlighted, setHighlighted] = useState([]);
    const uniqueId = useId();

    const handleHighlight = ([x, y, z]) => {
        setHighlighted([x, y, z])
        setTimeout(() => {
            setHighlighted([]);
        }, 2000);
    }

    const handleClick = (event) => {
        if (event.target.id === uniqueId) {
            setCount(count + 1);
            handleHighlight([8, 9, 16]);
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
            <Typography htmlFor={uniqueId}
                sx={{
                    mb: 2,
                }}
            >Count: {count}</Typography>
            <Button id={uniqueId} variant="contained" color="primary" onClick={handleClick}>
                Increment
            </Button>
            <Link
                sx={{
                    display: 'block',
                    mt: 2,
                }}
                href="#">Back to top</Link>
        </Card>
    );
}

export default UseIdExample;
