import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import "./App.css";
import LinearStepper from "./components/LinearStepper/LinearStepper";

function App() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
}

export default App;
