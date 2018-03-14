import React, { Component } from 'react'
import './ProjectResult.scss'
import Competition from './Competition'
import Paper from './Paper'
import { POST } from '../../../components/commonModules/POST'
import { message } from 'antd'

class ProjectResult extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  
  componentDidMount () {
    POST('/user/queryGlory','type=1',re=>{
      if(re.state==1){

      }else{
        message.error('服务器错误')
      }
    })    
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
