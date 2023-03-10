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
      <Button variant="outlined" onClick={toggleDrawer} sx={{ height: 40, width: 40, borderRadius: 2, border: 1, borderColor: 'grey.500', position: 'sticky', top: 15, left: 8}}>
        {isOpen ? 'X' : <MenuIcon />}
      </Button>
      <Drawer anchor="open" open={isOpen} onClick={toggleDrawer}>
        <List sx={{ width: 250 }}>
          <ListItem>
            <Link href="#useState" onClick={toggleDrawer}>useState</Link>
          </ListItem>
          <ListItem>
            <Link href="#useEffect" onClick={toggleDrawer}>useEffect</Link>
          </ListItem>
          <ListItem>
            <Link href="#useRef" onClick={toggleDrawer}>useRef</Link>
          </ListItem>
          <ListItem>
            <Link href="#useContext" onClick={toggleDrawer}>useContext</Link>
          </ListItem>
          <ListItem>
            <Link href="#useReducer" onClick={toggleDrawer}>useReducer</Link>
          </ListItem>
          <ListItem>
            <Link href="#useCallback" onClick={toggleDrawer}>useCallback</Link>
          </ListItem>
          <ListItem>
            <Link href="#useMemo" onClick={toggleDrawer}>useMemo</Link>
          </ListItem>
          <ListItem>
            <Link href="#useLayoutEffect" onClick={toggleDrawer}>useLayoutEffect</Link>
          </ListItem>
          <ListItem>
            <Link href="#useDebugValue" onClick={toggleDrawer}>useDebugValue</Link>
          </ListItem>
        </List>
        <Button onClick={toggleDrawer}>Close</Button>
      </Drawer>
    </>
  );
}

export default Sidebar;
