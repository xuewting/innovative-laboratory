import React, { Component } from 'react';
import Info from './module/Info'
import {Row, Col} from 'antd'

class Side extends Component {
  render() {
    return (
      <div>
        <Info state={this.props.state}></Info>
      </div>
    );
  }
}

export default Side;