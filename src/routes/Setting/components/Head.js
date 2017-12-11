import React, { Component } from 'react';
import Default from './0824ab18972bd40790e0d4b571899e510fb30956.jpg'

class Head extends Component {
  constructor(props) {
    super(props);
    this.state={
      src:''
    }
  }
  
  changeFile(){
    this.refs.file.click()
  }

  changeSrc(e){
    this.setState({src:e.target.value})
  }
  render() {
    return (
      <div className='set_head'>
        <div className='set_hh'>
          <h2>修&nbsp;&nbsp;改&nbsp;&nbsp;头&nbsp;&nbsp;像</h2>
        </div>
        <div className='set_himg'>
          <img src={Default} alt=""/>
        </div>
        <div className='set_select'>
          <div className="choise">
            <div className="set_inp" onClick={this.changeFile.bind(this)}>
              <input type="text" className='from_con' value={this.state.src}/>
              <input type="file" ref='file' onChange={this.changeSrc.bind(this)}/>
              <span className='set_change_file'>
                <button>更改</button>
              </span>
            </div>
          </div>
          <div className="commit">
          <button style={{cursor:'pointer'}}>保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Head;