import React, { Component } from 'react';
import './ProjectResult.scss'
import Competition from './Competition'
import Paper from './Paper'

class ProjectResult extends Component {
  render() {
    return (
      <div>
        <Competition></Competition>
        <Paper></Paper>
      </div>
    );
  }
}

export default ProjectResult;