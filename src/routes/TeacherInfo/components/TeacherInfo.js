import React, { Component } from 'react';
import './Tinfo.scss'
import { POST, BASE_URL } from '../../../components/commonModules/POST';
import {message} from 'antd'

class TeacherInfo extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:this.props.location.query.id,
      data:''
    }
  }

   goBack(){
    history.back()
  }
  
  componentWillMount() {
    POST('/getTeacherById',`id=${this.state.id}`,re=>{
      if(re.state==1){
        this.setState({data:re.data})
      }else{
        message.error('服务器错误')
      }
    })
  }
  
  render() {
    const {data} = this.state
    return (
      <div>
        <div className="good_info">
          <div className="good_info_head">
            <div className="good_info_img">
              <img src={BASE_URL+data.headImg} alt="" style={{width:300,height:300}}/>
            </div>
            <div className="good_info_con">
              <h2>{data.name}</h2>
              <span className="info_con">职称：{data.rank}</span>
              <span className="info_con">邮箱：{data.email}</span>
              <span className="info_con">所属实验室：{/* data.lab.name */}</span>
            </div>
          </div>
        </div>
        <div className="good_active">
          <div className="good_borrow">
            <div className="contanct">
            <h2>详细介绍</h2>
            <div className="contanct_con">
                {/* data.introduce */}
            </div>
            </div>
          </div>
        </div>
        <div className="good_foot">
        <div className="set" onClick={this.goBack.bind(this)}>
            <i className='fa fa-sign-out'></i> 返回
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherInfo;