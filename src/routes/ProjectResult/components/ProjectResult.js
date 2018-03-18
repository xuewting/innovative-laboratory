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
      paper:[],
      competition:[],
    }
  }
  
  componentDidMount () {
    POST('/user/queryGlory','type=1',re=>{
      if(re.state==1){
        this.setState({paper:re.data.rows});
      }else{
        message.error('服务器错误')
      }
    })
    POST('/user/queryGlory', 'type=0', re => {
      if (re.state == 1) {
        this.setState({competition:re.data.rows})
      } else {
        message.error('服务器错误')
      }
    })    
  }
  render () {    
    return (
      <div>
        <Competition competition={this.state.competition}/>
        <Paper paper={this.state.paper}/>
      </div>
    )
  }
}

export default ProjectResult
