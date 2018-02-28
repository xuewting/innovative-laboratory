import React, { Component } from 'react'
import { convertFromRaw,EditorState, convertToRaw, ContentState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

class Plan extends Component {
  constructor(props) {
    super(props);
    this.state={
      editorState: EditorState.createEmpty(),
      value:'<p>Hey this <strong>editor</strong> rocks </p>'      
    }
  }
  
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
    this.refs.html.innerHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()))
  }

  
  componentWillMount() {
    const { editorState, value } = this.state
    const contentBlock = htmlToDraft(value)
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
      const editorState = EditorState.createWithContent(contentState)
      this.setState({ editorState })
    }
  }
  

  render() {
    const { editorState } = this.state
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          toolbarClassName="toolbar-class"
          toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'colorPicker', 'textAlign', 'list', 'history'],
          }}
        />
        <div ref='html'>
        </div>
        
      </div>                 
    );
  }
}

export default Plan;