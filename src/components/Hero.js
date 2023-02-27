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
                This site aims to answer one question: Can I increment a counter using every React hook? The answer is (mostly) yes, but it's not always the best way to do it. This is meant to be educational, not a best practices guide. For more information, see the <Link href="https://reactjs.org/docs/hooks-intro.html">React Hooks Docs</Link>.
            </Typography>
            <Typography
                variant="body1"
                component="p"
                gutterBottom
            >The source code for this site is available on <Link href="https://papercircuit.github.io/react-hooks-examples/">Github</Link>.</Typography>



            <Typography
                variant="body2"
                component="section"
                gutterBottom
            >
                Jump to each example:
                <ul>
                    <li><Link href="#useState">useState</Link></li>
                    <li><Link href="#useEffect">useEffect</Link></li>
                    <li><Link href="#useRef">useRef</Link></li>
                    <li><Link href="#useContext">useContext</Link></li>
                    <li><Link href="#useReducer">useReducer</Link></li>
                    <li><Link href="#useId">useId</Link></li>
                    <li><Link href="#useMemo">useMemo</Link></li>
                    <li><Link href="#useCallback">useCallback</Link></li>
                    <li><Link href="#useLayoutEffect">useLayoutEffect</Link></li>
                    <li><Link href="#useDebugValue">useDebugValue</Link></li>
                    <li><Link href="#useTransition">useTransition</Link></li>
                    <li><Link href="#useDefferedValue">useDefferedValue</Link></li>
                </ul>
            </Typography>


        </Box>
    );
}

export default Hero;