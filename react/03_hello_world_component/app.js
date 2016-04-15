/** @jsx React.DOM */

var HelloComponent = React.createClass({
    render(){
        return (
            <h1>Hello, world!</h1>
        );
    }
});

React.renderComponent(
    <HelloComponent/>,
    document.getElementById('myDiv')
);

