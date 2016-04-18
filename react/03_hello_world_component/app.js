/** @jsx React.DOM */

var HelloComponent = React.createClass({
    render(){
        let x = 1+2;
        return (
            <h1>Hello, result is: {x}</h1>
        );
    }
});

React.renderComponent(
    <div>
        <HelloComponent/>
        <HelloComponent/>
        <HelloComponent/>
        <HelloComponent/>
    </div>,
    document.getElementById('myDiv')
);

