import React, { useState } from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';

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
                minWidth: isHidden ? 100 : 200,

            }}
        >
            <Button
                variant="outlined"
                onClick={handleHideSidebar}
                sx={{
                    mb: 2,
                }}
            >
                {isHidden ? <MenuIcon /> : 'X'}
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