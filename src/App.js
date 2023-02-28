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



function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Paper
        sx={{
          p: 2,
          m: 2,
        }}
        elevation={3}
        mode="outlined"
        className="App"

      >
        <Hero />


        <UseStateExample />
        <UseEffectExample />
        <UseRefExample />
        <UseContextExample />
        <UseReducerExample />
        <UseIdExample />
        <UseMemoExample />
        <UseCallbackExample />
        <UseLayoutEffectExample />
        <UseDebugValueExample />
        <UseTransitionExample />
        <UseDefferedValueExample />

        <Footer />

      </Paper>
    </Box>
  );
}

export default App;
