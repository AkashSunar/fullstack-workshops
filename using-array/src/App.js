const hero= (props) => {
    return React.createElement("div", {}, [React.createElement("h1", {},props.name),
        React.createElement("h2", {},props.age),
        React.createElement("h3", {},props.hitMovie)])
        
     
}
const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1",{},"The top khans of Bollywood"),
        React.createElement(hero, { name:"SRK",age:54,hitMovie:"Pathaan"}),
         React.createElement(hero, { name:"Salman",age:52,hitMovie:"Bajrangi Bhaijaan"}),
        React.createElement(hero, { name:"Amir khan",age:50,hitMovie:"PK"})
    ]
    )
}
const container = document.getElementById("root");
let root = ReactDOM.createRoot(container);
root.render(React.createElement(App));