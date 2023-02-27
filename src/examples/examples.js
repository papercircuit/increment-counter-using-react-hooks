// this will be a data object file that will be used to generate the examples page

const examples = [
    {
        name: "useState",
        description: "In this example we are using the useState hook to update the text state variable. The text state variable is then used to display a message to the user. The text state variable is also used to update the button text. The button text is updated by using a ternary operator to check if the text state variable is equal to 'Button clicked'. If the text state variable is equal to 'Button clicked' then the button text will be updated to 'Click the button to see the count change'. If the text state variable is not equal to 'Button clicked' then the button text will be updated to 'Button clicked'.",
        code: `function UseStateCounter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
    );
}

function UseStateExample() {
    `
    },
    {
        name: "useEffect",
        description: "In this example we are using the useEffect hook to update the count state variable every time the text state variable changes. This is a simple example of how useEffect can be used to trigger a state change when a different state variable changes.",
        code: `function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("Click the button to see the count change");

    const handleIncrement = () => {
        if (text !== "Button clicked") {
            setText("Button clicked");
        } else {
            setText("Click the button to see the count change");
        }
    }

    useEffect(() => {
        // this will run every time the text changes and the count will be incremented
        setCount(count + 1);
    }
    , [text]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Click me</button>
        </div>
    );`,
    handleIncrement: "function UseEffectCounter()"
        
    }
]

export default examples