import CounterButton from "./CounterButton";
import { useCounterValue } from "./CounterContext";
import CounterContext from "./CounterContext";
import { useContext } from "react";

const App = () => {
  const counter = useCounterValue();
  // const [counter, dispatch] = useContext(CounterContext);
  return (
    <div>
      <div>{counter}</div>
      <div>
        <CounterButton label="+" type="INC" />
        <CounterButton label="-" type="DEC" />
        <CounterButton label="0" type="ZERO" />
      </div>
    </div>
  );
};

export default App;
