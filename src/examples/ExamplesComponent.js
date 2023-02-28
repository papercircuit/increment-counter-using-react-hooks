import UseCallbackExample from "./UseCallback";
import UseContextExample from "./UseContext";
import UseDebugValueExample from "./UseDebugValue";
import UseDefferedValueExample from "./UseDefferedValue";
import UseEffectExample from "./UseEffect";
import UseIdExample from "./UseId";
import UseLayoutEffectExample from "./UseLayoutEffect";
import UseMemoExample from "./UseMemo";
import UseReducerExample from "./UseReducer";
import UseRefExample from "./UseRef";
import UseStateExample from "./UseState";
import UseTransitionExample from "./UseTransition";
import Paper from "@mui/material/Paper";

function ExamplesComponent() {

    return (
            <>     
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
            </>
       

    )
}

export default ExamplesComponent;
