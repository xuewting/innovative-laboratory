import React, { Component } from 'react';
import '../css/info.scss'

class EditInfo extends Component {
  constructor(props) {
    super(props);
    this.state={
      photo:[],
    }
  }
  
  render() {
    return (
      <div className='edit'>
        <div className="edithead">
          <h2>Setting</h2>
        </div>
        <div className="editcontent">
          <textarea className='editconinp' rows="10">
          </textarea>
          <div className="confoot">
          <div className="footleft">
            <button>
             <i className='fa fa-photo'></i>
             <img src="" alt=""/>
            </button>
          </div>
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