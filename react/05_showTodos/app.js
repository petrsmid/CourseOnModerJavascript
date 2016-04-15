/** @jsx React.DOM */

//EXERCISE 1: fill in the missing code

let Todo = React.createClass({
    render(){
        return <h3>...fill in...</h3>
    }
});


let Todos = React.createClass({
    render(){
        let todoComponents = [];
        for(let i=0; i<this.props.todos.length; i++) {
            todoComponents.push(<Todo name={this.props.todos[i]} />);
        }

        return (
            <div>
                <h1>TODOs:</h1>
                ...fill in...
            </div>
        );
    }
});

//EXERCISE 2: load the TODOs from our "server" - Apiary using the httpGet function below
let myTodos = ["Buy milk", "Go to gym", "Learn React"];

React.renderComponent(
    <Todos todos={myTodos}/>,
    document.getElementById('myDiv')
);



var httpGet = (theUrl) => {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request - we will show us this is not the right way to do
    xmlHttp.send(null);
    return xmlHttp.responseText;
};
