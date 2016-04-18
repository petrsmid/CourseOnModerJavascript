/** @jsx React.DOM */

var HelloComponent = React.createClass({
    render(){
        return (
            <h1>Hello {this.props.nameXYZ}!</h1>
        );
    }
});

React.renderComponent(
    <HelloComponent nameXYZ={1+2+"Hello"}/>,
    document.getElementById('myDiv')
);

