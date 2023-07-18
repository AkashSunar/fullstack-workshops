const myFrnd = () => {
    return React.createElement("div", {}, [("h1", { class: "friend" }, "I am your friend"),
        React.createElement("h2", { class: "bestFrn" }, "I am your best friend"),
        React.createElement("h2", { class: "enemy" }, "I am your Enemy")])
        
     
}
const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1",{},"hello SRK fan"),
        React.createElement(myFrnd),
         React.createElement(myFrnd),
        React.createElement(myFrnd)
    ]
    )
}
const container = document.getElementById("root");
let root = ReactDOM.createRoot(container);
root.render(React.createElement(App));