import React, { Component } from 'react'
import '../css/info.scss'
import { Tooltip, message, Upload, Button, Icon } from 'antd'
import Edit from './Edit'
import { POST, POSTFile } from '../../../components/commonModules/POST';

class EditInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: [],
      img: [],
      state:true,
      con:'',
      file:[]
    }
  }

  openFile() {
    this.refs.file.click();
  }

  changeState=()=>this.setState({state:!this.state.state});
  //submit
  submit(){
    if(this.state.state){
      this.submitRate()
    }else{
      this.endProject()
    }
  }
  //提交进度
  submitRate=()=>{    
      let id = this.props.id
      POST('/addProRate', `content=${this.state.con}&id=${id}`, re => {
        if (re.state == 1) {
          message.success('提交成功')
          this.props.getRate()
        } else {
          message.error('提交失败')
        }
      })    
  }

  //项目进度内容
  changeCon(value) {
    this.setState({ con: value })
  }

  //endProject
  endProject(){    
    var formdata = new FormData()
    formdata.append('file', this.state.file[0].originFileObj) 
    formdata.append('projectResults', 'end Project')
    formdata.append('id',this.props.id)  
    POSTFile('/endProject',formdata,re=>{
      if(re.state==1){
        message.success('恭喜完成一个完整的项目(๑•̀ㅂ•́)و✧')
        this.props.initrial()
      }else{
        message.error('服务器错误')
      }
    })
  }

  onChange(info) {
    this.setState({ file: info.fileList })
    // console.log(info.fileList[0].originFileObj)
  }

  render() {
    const {state,file}=this.state
    const props = {
      name: 'file',
      action: '',
      headers: {
        authorization: 'authorization-text',
      },
      
    };
    console.log(this.props.end)
    return (
      <div className='edit'>
        {/*head*/}
        {this.props.end?'':
        <div>
        <div className="edithead">
          <h2>{state ? '项目新进度':'申请项目结束'}</h2>
          <span style={{ color: '#26b2d4', fontSize: 16, cursor: 'pointer' }} onClick={this.changeState.bind(this)}>
            {state ? '申请项目结束' : '项目新进度'}</span>
        </div>
        {/*add content*/}
        <div className="editcontent">
        {state?//提交进度或结项
          <div>
            <Edit change={this.changeCon.bind(this)}></Edit>
            <div className='alarm'>请用一段文字说明进度进展情况</div>
              <div className='alarm'>*注意提交后不能删改，三思而后行</div>
            </div>:
            <Upload {...props} accept='application/msword' onChange={this.onChange.bind(this)} fileList={file}>
              {file.length >= 1 ? null : 
                <Button style={{ marginBottom: 20 }} disabled={this.props.end}>
                  <Icon type="upload" /> 点击上传文件（word）
                </Button>}
              
            </Upload>}
          <div className="confoot">            
            <div className="footright">
              <button onClick={this.submit.bind(this)}>Submit</button>
            </div>           
          </div>
        </div>
          </div>
        }
      </div>
    );
  }
}

export default EditInfo;