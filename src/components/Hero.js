import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Hero = () => {
    return (
        <Box
            component="section"
        >
            <Typography
                variant="h4"
                component="h1"
                gutterBottom
            >Increment a Counter using React Hooks</Typography>
            <Typography
                variant="body1"
                component="p"
                gutterBottom
            >
                This site aims to answer one question: Can I increment a counter using every React hook? The answer is (mostly) yes, but it's not always the best way to do it. This is meant to be educational, not a best practices guide. A thought experiment/reference if you will. For more information, see the <Link href="https://reactjs.org/docs/hooks-intro.html">React Hooks Docs</Link>.
            </Typography>
            <Typography
                variant="body1"
                component="p"
                gutterBottom
            >The source code for this site is available on <Link href="https://papercircuit.github.io/react-hooks-examples/">Github</Link>.</Typography>
            
        </Box>
    );
}

export default Hero;