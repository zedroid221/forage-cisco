import React from 'react';
//import { client } from 'websocket';
import { w3cwebsocket } from 'websocket';

var W3CWebSocket = require('websocket').w3cwebsocket;
const client = new W3CWebSocket('ws://localhost:55455');

let calculateLatency = (self, e) => {
    self.setState({latency: Date.now() - e.data})
}

class Latency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latency: null
        };
    }

    componentDidMount = () => {
        client.onerror = function(error) {
            console.log("connection error: " + error.toString());
        }

        client.onopen = function() {
            console.log("connected")
        }
        client.onmessage = (e) => {
            this.setState({latency: Date.now() - e.data})
        }
    }

    render() {
        return (
            <p>
                {this.state.latency}
            </p>
        )
    }
}

export default Latency;