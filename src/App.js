import './App.css';
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
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


function App() {
  return (
    <Paper
      sx={{
        p: 2,
        m: 2,
      }}
      mode="outlined"
      className="App">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
      >React Hooks Examples</Typography>
      <UseStateExample />
      <UseEffectExample />
      <UseRefExample />
      <UseContextExample />
      <UseMemoExample />
      <UseReducerExample />
      <UseCallbackExample />
      <UseLayoutEffectExample />
      <UseDebugValueExample />
      <UseTransitionExample />
      <UseIdExample />
      <UseDefferedValueExample />

    </Paper>
  );
}

export default App;
