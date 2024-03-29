import { Box, Paper, CssBaseline, Grid, AppBar, Toolbar, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import UseContextExample from "./examples/UseContext";
import UseReducerExample from "./examples/UseReducer";
import UseStateExample from "./examples/UseState";
import UseEffectExample from "./examples/UseEffect";
import UseRefExample from "./examples/UseRef";
import UseMemoExample from "./examples/UseMemo";
import UseCallbackExample from "./examples/UseCallback";
import UseLayoutEffectExample from "./examples/UseLayoutEffect";
import UseDebugValueExample from "./examples/UseDebugValue";
import UseTransitionExample from "./examples/UseTransition";
import UseIdExample from "./examples/UseId";
import UseDefferedValueExample from "./examples/UseDefferedValue";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Dropdown from "./components/Dropdown";
import InViewLoader from "./components/InViewLoader";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const components = [
    { Component: UseStateExample, alt: "useState example" },
    { Component: UseEffectExample, alt: "useEffect example" },
    { Component: UseRefExample, alt: "useRef example" },
    { Component: UseContextExample, alt: "useContext example" },
    { Component: UseReducerExample, alt: "useReducer example" },
    { Component: UseIdExample, alt: "useId example" },
    { Component: UseMemoExample, alt: "useMemo example" },
    { Component: UseCallbackExample, alt: "useCallback example" },
    { Component: UseLayoutEffectExample, alt: "useLayoutEffect example" },
    { Component: UseDebugValueExample, alt: "useDebugValue example" },
    { Component: UseTransitionExample, alt: "useTransition example" },
    { Component: UseDefferedValueExample, alt: "useDefferedValue example" },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={11} md={10} lg={9} xl={8}>
          <Paper sx={{ p: 2, m: 2 }} elevation={3} mode="outlined" className="App">
            <Hero />
            <Dropdown />

            {components.map(({ Component, alt }, index) => (
              <InViewLoader key={index} component={Component} alt={alt} />
            ))}
          </Paper>
        </Grid>
      </Grid>
      <Footer alt="footer" />
    </ThemeProvider>
  );
}

export default App;





