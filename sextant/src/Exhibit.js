import React from 'react';
import Banner from './Banner'

class Exhibit extends React.Component {
    render() {
      return (
        <div className="exhibit">
          <Banner name={this.props.title}/>
          <div className="datapoint">
            {this.props.children}
          </div>
        </div>
      );
    };
  }
  export default Exhibit;