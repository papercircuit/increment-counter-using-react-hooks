import UseContextExample from './examples/UseContext';
import UseReducerExample from './examples/UseReducer';
import UseStateExample from './examples/UseState';
import UseEffectExample from './examples/UseEffect';
import UseRefExample from './examples/UseRef';
import UseMemoExample from './examples/UseMemo';
import UseCallbackExample from './examples/UseCallback';
import UseLayoutEffectExample from './examples/UseLayoutEffect';
import UseDebugValueExample from './examples/UseDebugValue';
import UseTransitionExample from './examples/UseTransition';
import UseIdExample from './examples/UseId';
import UseDefferedValueExample from './examples/UseDefferedValue';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Hero from './components/Hero';
import ExamplesComponent from './examples/ExamplesComponent';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Paper
          sx={{
            p: 2,
            m: 2,
          }}
          elevation={3}
          mode="outlined"
          className="App">
           <Hero />
          
          <UseStateExample alt="useState example" />
          <UseEffectExample alt="useEffect example" />
          <UseRefExample alt="useRef example" />
          <UseContextExample alt="useContext example" />
          <UseReducerExample alt="useReducer example" />
          <UseIdExample alt="useId example" />
          <UseMemoExample alt="useMemo example" />
          <UseCallbackExample alt="useCallback example" />
          <UseLayoutEffectExample alt="useLayoutEffect example" />
          <UseDebugValueExample alt="useDebugValue example" />
          <UseTransitionExample alt="useTransition example" />
          <UseDefferedValueExample alt="useDefferedValue example" />
          
        </Paper>
      </Box>
      <Footer alt="footer" />
    </ThemeProvider>
  );
}

export default App;
