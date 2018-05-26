import React, { Component } from 'react'
import { Row, Col, Button, Pagination } from 'antd'
import './Message.scss'
import { browserHistory } from 'react-router'
import tag from './标签.png'
class Message extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [{htmlBody:''}],
      type:this.props.type
    }
  }

  // 跳转到消息详情
  toDetail (id) {
    browserHistory.push({
      pathname: '/mdetail',
      query: {
        id: id,
        type:this.state.type
      }
    })
  }
  // 获取数据
  componentWillReceiveProps (nextProps) {
    this.setState({ list:nextProps.data })    
  }

  render () {
    const { type, list } = this.state
    return (
      <div>
        <Button type='primary' onClick={() => history.back()} style={{ marginLeft: 30, marginBottom: 20 }}>返回</Button>       
        <Row>
          <div className='message'>
            <div className='mes_list'>
              <div className='mes_box'>
                {this.state.list.map((item, i) => {
                  //  this.refs[i].innerHTML = item.htmlBody 
                  return (
                    <Row key={i}>
                    {type=='message'?
                      <Col span={18}>
                        <div className='mes_con' onClick={() => this.toDetail(item.id)}>
                          <h2>{item.title}</h2>                          
                          <div className='contain'>
                            <span>{item.content ? item.content : ''}</span>
                          </div>                                                                                                                                                                       
                        </div>
                      </Col>
                        : <Col span={18}>
                          <div className='mes_con' onClick={() => this.toDetail(item.id)}>
                          <Row>
                            <Col span={20}>
                             <h2>{item.title}</h2>
                              </Col>
                              <Col style={{color:'#fff',paddingTop:7}} span={4}>
                                <img src={tag} alt="" style={{width:'12%'}}/> {item.tag}
                              </Col>
                          </Row>
                          </div>
                        </Col>}                      
                    </Row>
                  )
                })}
              </div>
            </div>
          </div>
        </Row>
        {type == 'news' ?
          <Pagination
            defaultCurrent={this.props.current}
            total={this.props.total}
            pageSizeOptions={10}
            hideOnSinglePage
            onChange={(e) => this.props.changePage(e)} 
            style={{float:'right',marginRight:10,marginBottom:20}}/>:null}
      </div>
    )
  }
}

export default Message
