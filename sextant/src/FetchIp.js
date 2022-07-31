import React, { Component } from 'react';

class FetchIp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            ipAddress: null
        };
    }

    componentDidMount = () => {
        console.log(this)
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({ ipAddress: data.ip }));
    }

    render() {
        return (
            <span className="AddressDisplay">
                {this.state.ipAddress}
            </span>
        );
    }
}

export default FetchIp;