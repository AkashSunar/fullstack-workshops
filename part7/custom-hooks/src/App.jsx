import useCounter from "./hooks/useCouonter";

const App = () => {
  const counter1 = useCounter(0);
  const counter2 = useCounter(0);
  // console.log(counter1);
  // console.log(counter1.value);
  return (
    <>
      <div>
        <div>{counter1.value}</div>
        <button onClick={counter1.increase}>plus</button>
        <button onClick={counter1.decrease}>minus</button>
        <button onClick={counter1.zero}>zero</button>
      </div>
      <div>
        <div>{counter2.value}</div>
        <button onClick={counter2.increase}>plus</button>
        <button onClick={counter2.decrease}>minus</button>
        <button onClick={counter2.zero}>zero</button>
      </div>
    </>
  );
};
export default App;
