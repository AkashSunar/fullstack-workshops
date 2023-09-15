import { useContext } from "react";
import { useCounterDispatch } from "./CounterContext";
const CounterButton = (props) => {
  const dispatch = useCounterDispatch();

  return (
    <button
      onClick={() => {
        dispatch({ type: props.type });
      }}
    >
      {props.label}
    </button>
  );
};
export default CounterButton;
