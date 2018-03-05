import React, { Component } from 'react'
import '../css/info.scss'
import { Tooltip, message } from 'antd'
import Edit from './Edit'

class EditInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: [],
      img: [],
    }
  }

  openFile() {
    this.refs.file.click();
  }

  //add photo
  addPhoto(e) {
    if (this.state.img.length == 4) {
      message.error('最多插入四张图片！')
    } else {
      console.log(this.state.img)
      var file = e.target.files[0]
      var reader = new FileReader()
      var imgFile
      this.state.img = [...this.state.img, file]
      console.log(this.state.img)
      this.setState({ img: this.state.img })
      reader.onload = (e) => {
        imgFile = e.target.result
        this.state.photo = [...this.state.photo, imgFile]
        this.setState({ src: this.state.photo })
        console.log(this.state.photo)
      }
      reader.readAsDataURL(file);
    }
  }

 

  render() {
    return (
      <div className='edit'>
        {/*head*/}
        <div className="edithead">
          <h2>项目新进度</h2>
        </div>
        {/*add content*/}
        <div className="editcontent">
          <Edit></Edit>
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