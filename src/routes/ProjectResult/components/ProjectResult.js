import React, { Component } from 'react'
import './ProjectResult.scss'
import Competition from './Competition'
import Paper from './Paper'

class ProjectResult extends Component {
  componentDidMount () {
    
  }
  render () {
    return (
      <div>
        <Competition />
        <Paper />
      </div>
    )
  }
}

export default ProjectResult
