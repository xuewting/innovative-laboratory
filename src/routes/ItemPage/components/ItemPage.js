import React, { Component } from 'react';
import {Row,Col, DatePicker, Tooltip } from 'antd'
import '../css/ItemPage.scss'
import sea from '../img/search.png'
import rili from '../img/日历.png'
import up from '../img/升序 (1).png'
import down from '../img/降序.png'
import time from '../img/im-time.png'
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
    list:0,
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

  changeStyle(value){
    if(value.target.value=='grid'){
    this.setState({list:0})
    }else{
      this.setState({list:1})
    }

  }

  render() {
    return (
      <div>
      {/*search_group*/}
      <div className="item_search">
        <div className="sea_con">
          <Row style={{marginBottom:0,marginTop:10,width:'100%',float:'left'}}>
            <Col span={6} style={{position:'relative',paddingLeft:10,paddingRight:10}}>
              <select name="" id="" className="list_control" onChange={this.changeStyle.bind(this)}>
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
              <img src={rili} alt=""/>
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
      {/*head*/}
      <div className="item_head">
        <h2>项目列表</h2>
        <div className="head_right">
          <div className="but_ul">
          <Tooltip title='升序'>
            <div className="sort">
              <img src={up} alt=""/>
            </div>
          </Tooltip>
          <Tooltip title='降序'>
            <div className="sort">
              <img src={down} alt=""/>
            </div>
          </Tooltip>
          </div>
        </div>
      </div>
      {/*list_content*/}
      <div className="list_con">
      { this.state.list==0?
        <div className="list_item_box">
          <div className="list_item_con">
            <div className="list_item_head">Lorem ipsum dolor sit amet</div>
            <div className="list_item_subhead">指导老师：</div>
            <div className="list_item_subhead">发起人：</div>
            <div className="list_item_subhead">实验室：</div>
            <div className="list_item_date">
            <Tooltip title='开始时间'>
             <img src={rili} alt=""/>
               &nbsp;15 oct 2013 &nbsp;
            </Tooltip>
            <Tooltip title='结束时间'>
             <img src={time} alt=""/>
              &nbsp;oct 2014 &nbsp;
            </Tooltip>
            </div>
          </div>
        </div>
        :
      <div className="style_list">
        <div className="task_list">
          <div className="task_con">
            <div className="task_head">Lorem ipsum dolor sit amet</div>
            <div className="task_date">
              <Tooltip title='开始时间'>
             <img src={rili} alt=""/>
               &nbsp;15 oct 2013 &nbsp;
            </Tooltip>
            <Tooltip title='结束时间'>
             <img src={time} alt=""/>
              &nbsp;oct 2014 &nbsp;
            </Tooltip>
            </div>
          </div>
          
        </div>
      </div>}
      </div>
      </div>
    );
  }
}

export default ItemPage;