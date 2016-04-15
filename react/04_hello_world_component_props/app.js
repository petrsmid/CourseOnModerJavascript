/** @jsx React.DOM */

var HelloComponent = React.createClass({
    render(){
        return (
            <h1>Hello {this.props.name}!</h1>
        );
    }
});

React.renderComponent(
    <HelloComponent name="Bhavin"/>,
    document.getElementById('myDiv')
);

