import React, { Component } from 'react'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { convertFromRaw, EditorState, convertToRaw, ContentState } from 'draft-js'

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    }
  }

  shouldComponentUpdate(nextProps, nextState) {  
    let  editorState  = nextProps.editorState
    this.refs.box.innerHTML = editorState
    return true
  }


  render() {
    return (
      <div>
        <div className='good_active'>
          <div className='good_borrow'>
            <div className='contanct'>
              <h2>详细说明</h2>
              <div className='contanct_con' ref='box'>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;