import React, { Component } from 'react';
import Result from './Result'
import Side from './Sidebar'
import { Row, Col } from 'antd'
import '../css/Search.scss'

class Search extends Component {
  render() {
    return (
      <div className='searchpage'>
        <div className="sea_head">
          <div className="sea_box">
            <Row>
            <Col span={20}>
            <input type="text" className='sea_inp' placeholder='请输入要搜索的内容'/>
            </Col>
            <Col span={4}>
            <div className="sea_but">
              <i className='fa fa-search fa-3x'></i>
            </div>
            </Col></Row>
          </div>
        </div>
        <Result></Result>
      </div>
    );
  }
}

export default Search;