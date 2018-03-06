import React, { Component } from 'react'
import '../css/info.scss'
import { Tooltip, message, Upload, Button, Icon } from 'antd'
import Edit from './Edit'

class EditInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: [],
      img: [],
      state:true
    }
  }

  openFile() {
    this.refs.file.click();
  }

  changeState=()=>this.setState({state:!this.state.state});

  render() {
    const {state}=this.state
    const props = {
      name: 'file',
      action: '',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    return (
      <div className='edit'>
        {/*head*/}
        <div className="edithead">
          <h2>{state ? '项目新进度':'申请项目结束'}</h2>
          <span style={{ color: '#26b2d4', fontSize: 16, cursor: 'pointer' }} onClick={this.changeState.bind(this)}>
            {state ? '申请项目结束' : '项目新进度'}</span>
        </div>
        {/*add content*/}
        <div className="editcontent">
        {state?
            <Edit></Edit>:
            <Upload {...props} accept='application/msword'>
              <Button style={{ marginBottom: 20 }}>
                <Icon type="upload" /> 点击上传文件（word）
              </Button>
            </Upload>}
          <div className="confoot">            
            <div className="footright">
              <button>Submit</button>
            </div>           
          </div>
        </div>
      </div>
    );
  }
}

export default EditInfo;