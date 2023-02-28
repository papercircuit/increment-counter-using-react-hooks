import React from 'react';
import { useTheme } from '@mui/material/styles';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function Navbar() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: theme.palette.background.paper,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                p: 0,
                m: 0,

            }}
        >
            <ListItem>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
                <ListItemText primary="About" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Contact" />
            </ListItem>
            <IconButton onClick={colorMode.toggleColorMode} aria-label="toggle dark mode">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </List>
    );
}

export default Navbar;