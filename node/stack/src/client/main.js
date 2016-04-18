import React from 'react';
import "./components/helloworld";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <HelloWorld />
            </div>
        );
    }
}

