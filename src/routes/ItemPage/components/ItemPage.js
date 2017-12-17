import React, { Component } from 'react';
import {Row,Col, DatePicker,Icon} from 'antd'
import '../css/ItemPage.scss'
import sea from '../img/search.png'
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView'
import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput'
import {Timeline, TimelineEvent} from 'react-event-timeline'

class ItemPage extends Component {
  constructor() {
    super();
    console.log('2')
    this.handleModelChange = this.handleModelChange.bind(this);

    this.state = {
      model: '',
      config: {
        placeholderText: 'Edit Your Content Here!',
        charCounterCount: true,
        dragInline: true,
        toolbarVisibleWithoutSelection: true,
        height: 300,
        width: 850,
        fontFamilySelection: true,
        fontSizeSelection: true,
        paragraphFormatSelection: true
      },
      
    };
  }
  handleModelChange(model) {
    this.setState({
      model: model
    });
    console.log(model)
  }
  
  componentWillMount() {
    console.log('1')
  }
  
  onChange(date, dateString){
    console.log(date, dateString)
  }

  render() {
    return (
      <div>
      <div className="item_search">
        <div className="sea_con">
          <Row style={{marginBottom:0,marginTop:10,width:'100%',float:'left'}}>
            <Col span={6} style={{position:'relative',paddingLeft:10,paddingRight:10}}>
              <select name="" id="" className="list_control">
                <option value="grid">Grid</option>
                <option value="list">List</option>
              </select>
            </Col>
            <Col span={12} style={{paddingLeft:10,paddingRight:10}}>
              <div className="sea_group">
                <div className="sea_icon">
                  <img src={sea} alt=""/>
                </div>
                <input className="sea_input"></input>
              </div>
            </Col>
            <Col span={6} style={{paddingLeft:10,paddingRight:10}}>
            <div style={{display:'table',width:'100%',position:'relative'}}>
            <div className="date_icon">
              <img src="" alt=""/>
            </div>
              <DatePicker
              className="sea_date" 
              onChange={this.onChange.bind(this)}
              />
            </div>
            </Col>
          </Row>
        </div>
      </div>
       {/*<Timeline style={{background:'white'}}>
            <TimelineEvent title="John Doe sent a SMS"
                           createdAt="2016-09-12 10:06 PM"
                           icon={<i className="material-icons md-18">textsms</i>}
            >
                I received the payment for $543. Should be shipping the item within a couple of hours.
            </TimelineEvent>
            <TimelineEvent
                title="You sent an email to John Doe"
                createdAt="2016-09-11 09:06 AM"
                icon={<i className="material-icons md-18">email</i>}
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                    am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                    gentle reminder if you are on track already!
            </TimelineEvent>
    </Timeline>*/}
        {/*<FroalaEditor
          tag='textarea'
          model={this.state.model}
          onModelChange={this.handleModelChange}
          config={this.state.config}
        />
        <FroalaEditorView model={this.state.model} />*/}
      </div>
    );
  }
}

export default ItemPage;