import React, { useState } from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';

const hamburger = <svg height="32px" id="hamburger-icon" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>



function Sidebar() {
    const [isHidden, setIsHidden] = useState(false);

    const handleHideSidebar = () => {
        setIsHidden(!isHidden);

    };

    return (
        <Box
            variant="body2"
            component="section"
            sx={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                overflow: 'auto',
                p: 2,
                m: 2,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 1,
                minWidth: isHidden ? 70 : 140,

            }}
        >
            <Button
                variant="outlined"
                onClick={handleHideSidebar}
                sx={{
                    mb: 2,
                }}
            >
                {isHidden ? <MenuIcon/> : 'X'}
            </Button>
            <List
                sx={{
                    display: isHidden ? 'none' : 'block',
                }}
            >
                <ListItem>
                    <Link href="#useState">useState</Link>
                </ListItem>
                <ListItem>
                    <Link href="#useEffect">useEffect</Link>
                </ListItem>
                <ListItem>
                    <Link href="#useRef">useRef</Link>
                </ListItem>
                <ListItem>
                    <Link href="#useContext">useContext</Link>
                </ListItem>
                <ListItem>
                    <Link href="#useReducer">useReducer</Link>
                </ListItem>
                <ListItem>
                    <Link href="#useCallback">useCallback</Link>
                </ListItem>
                <ListItem>
                    <Link href="#useMemo">useMemo</Link>
                </ListItem>
                <ListItem>
                    <Link href="#useImperativeHandle">useImperativeHandle</Link>
                </ListItem>
                <ListItem>
                    <Link href="#useLayoutEffect">useLayoutEffect</Link>
                </ListItem>
                <ListItem>
                    <Link href="#useDebugValue">useDebugValue</Link>
                </ListItem>
            </List>
        </Box>
    );
}

export default Sidebar;