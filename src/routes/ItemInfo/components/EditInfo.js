import React, { Component } from 'react';
import '../css/info.scss'
import { Tooltip, message } from 'antd'

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

  // deletePhoto(num) {
  //   var { img, photo } = this.state
  //   var i = 0;
  //   var arr=[], brr=[]
  //   while (i <= img.length) {
  //     if (i != num) {
  //       console.log(arr.length)
  //       if(arr.length!=0){
  //       arr = [...arr, img[i]]
  //       brr = [...brr, photo[i]]
  //       }else{
  //         arr=[img[i]]
  //         console.log(img[i])
  //         brr=[photo[i]]
  //       }
  //     }
  //     i = i+1
  //   }
  //   console.log(arr)
  //   this.setState({ img: arr })
  //   this.setState({ photo: brr })
  //   console.log(this.state.img)
  //   console.log(this.state.photo)
  // }

  render() {
    return (
      <div className='edit'>
        {/*head*/}
        <div className="edithead">
          <h2>Setting</h2>
        </div>
        {/*add content*/}
        <div className="editcontent">
          <textarea className='editconinp' rows="10">
          </textarea>
          <div className="confoot">
            <div className="footleft">
              <input type="file" ref='file' style={{ width: 0 }} onChange={(e) => this.addPhoto(e)} />
              <Tooltip title='添加图片（最多可选4张）'>
                <button onClick={this.openFile.bind(this)}>
                  <i className='fa fa-photo'></i>
                </button>
              </Tooltip>
            </div>
            <div className="footright">
              <button>Submit</button>
            </div>
            <div style={{ display: 'block', width: '100%', float: 'left', marginTop: 20 }}>
              {this.state.photo.map((item, i) => {
                return (
                  <div className='imgbox' key={i}>
                    <img
                      src={item}
                      alt=""
                      style={{ width: 150, height: 115, borderRadius: 4, marginRight: 15, float: 'left' }} />
                    <div className="imgedit">
                      <Tooltip title='删除'>
                        <div >
                          <i className='fa fa-close'></i>
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditInfo;