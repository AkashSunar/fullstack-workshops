import { useReducer } from "react";
import CounterButton from "./CounterButton";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "ZERO":
      return 0;
    default:
      return state;
  }
};

const App = () => {
  const [counter, counterDispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <div>{counter}</div>
      <div>
        <CounterButton
          clickAction={() => counterDispatch({ type: "INC" })}
          label="+"
        />
        <CounterButton
          clickAction={() => counterDispatch({ type: "DEC" })}
          label="-"
        />
        <CounterButton
          clickAction={() => counterDispatch({ type: "ZERO" })}
          label="0"
        />
      </div>
    </div>
  );
};

export default App;
