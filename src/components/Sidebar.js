import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Sidebar() {
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
                minWidth: 140,

            }}
        >
            Jump to each example:
            <List
                sx={{
                    p: 0,
                    m: 0,
                    listStyle: 'none',
                }}
            >
                <ListItem><Link href="#useState">useState</Link></ListItem>
                <ListItem><Link href="#useEffect">useEffect</Link></ListItem>
                <ListItem><Link href="#useRef">useRef</Link></ListItem>
                <ListItem><Link href="#useContext">useContext</Link></ListItem>
                <ListItem><Link href="#useReducer">useReducer</Link></ListItem>
                <ListItem><Link href="#useId">useId</Link></ListItem>
                <ListItem><Link href="#useMemo">useMemo</Link></ListItem>
                <ListItem><Link href="#useCallback">useCallback</Link></ListItem>
                <ListItem><Link href="#useLayoutEffect">useLayoutEffect</Link></ListItem>
                <ListItem><Link href="#useDebugValue">useDebugValue</Link></ListItem>
                <ListItem><Link href="#useTransition">useTransition</Link></ListItem>
                <ListItem><Link href="#useDefferedValue">useDefferedValue</Link></ListItem>
            </List>
        </Box>
    );
}

export default Sidebar;