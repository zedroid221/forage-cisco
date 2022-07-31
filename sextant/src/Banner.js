import React from 'react';

class Banner extends React.Component{
    render() {
      return (
        <h1 className="title">{this.props.name}</h1>
      );
    }
  }

export default Banner;