import "./App.css";
import DecrementCounter from "./components/DecrementCounter";
import GreetingEditor from "./components/GreetingsEditor";
import IncrementCounter from "./components/IncrementCounter";
import Toggling from "./components/Toggling";
// import useBoolean from "./hooks/boolean";

const App = () => {
  return (
    <>
      <IncrementCounter />
      <DecrementCounter />
      <GreetingEditor />
      <Toggling />
    </>
  );
};

export default App;
