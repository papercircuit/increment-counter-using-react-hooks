import './App.css';
import UseContextExample from './examples/UseContext';
import UseReducerExample from './examples/UseReducer';
import UseStateExample from './examples/UseState';
import UseEffectExample from './examples/UseEffect';
import UseRefExample from './examples/UseRef';
import UseMemoExample from './examples/UseMemo';
import UseCallbackExample from './examples/UseCallback';
import UseImperativeHandleExample from './examples/UseImperativeHandle';
import UseLayoutEffectExample from './examples/UseLayoutEffect';
import UseDebugValueExample from './examples/UseDebugValue';
import UseCustomHookExample from './examples/UseCustomHook';
import UseCustomHookWithReducerExample from './examples/UseCustomHookWithReducer';


function App() {
  return (
    <div className="App">
      <h1>React Hooks Examples</h1>
      <UseStateExample />
      <UseReducerExample />
      <UseContextExample />
      <UseEffectExample />
      <UseRefExample />
      <UseMemoExample />
      <UseCallbackExample />
      <UseImperativeHandleExample />
      <UseLayoutEffectExample />
      <UseDebugValueExample />
      <UseCustomHookExample />
      <UseCustomHookWithReducerExample />
        
   
    </div>
  );
}

export default App;
