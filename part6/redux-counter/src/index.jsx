import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const counterReducer = (state = 100, action) => {
  if (action.type === "ADD") {
    return state + 1;
  } else if (action.type === "SUBTRACT") {
    return state - 1;
  } else if (action.type === "ZERO") {
    return 0;
  }
  return state;
};
const store = createStore(counterReducer);

const App = () => {
  const addCounter = () => {
    store.dispatch({ type: "ADD" });
  };

  const subCounter = () => {
    store.dispatch({ type: "SUBTRACT" });
  };
  const zero = () => {
    store.dispatch({ type: "ZERO" });
  };
  return (
    <div>
      <div>{store.getState()}</div>
      <button onClick={addCounter}>add</button>
      <button onClick={subCounter}>subtract</button>
      <button onClick={zero}>zero</button>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
store.subscribe(() => {
  root.render(<App />);
});
