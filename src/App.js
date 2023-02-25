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


function App() {
  return (
    <div className="App">
      <h1>React Hooks Examples</h1>
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

    </div>
  );
}

export default App;
