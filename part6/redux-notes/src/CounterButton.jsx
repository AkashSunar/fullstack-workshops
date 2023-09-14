import { useContext } from "react";
import CounterContext from "./counterContext";
const CounterButton = (props) => {
   const [counter, dispatch] = useContext(CounterContext);
  return <button onClick={()=>{dispatch({type:props.type})}}>{props.label}</button>;
};
export default CounterButton;
