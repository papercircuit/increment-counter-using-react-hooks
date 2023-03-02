import React, { useState } from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button variant="outlined" onClick={toggleDrawer} sx={{ mb: 2 }}>
        {isOpen ? <MenuIcon /> : 'X'}
      </Button>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
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
      </Drawer>
    </>
  );
}

export default Sidebar;
