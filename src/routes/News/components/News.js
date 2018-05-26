import React, { Component } from 'react'
import Message from '../../../components/Message/Message'
import { POST } from '../../../components/commonModules/POST'

class News extends Component {
   constructor (props) {
    super(props)
    this.state = {
      list:[],
      current:1,
      total:''
    }
  }

  componentWillMount () {
    //初始化
    this.getNews(1)
  }

// 获取数据
  getNews(current){
    POST('/getAllNews', `pageCount=${10}&currentPage=${current}`, re => {
      if (re.state == 1) {
        this.setState({
          list: re.data.rows,
          total: re.data.count,
          current:current
        })
      } else {
        message.error('服务器错误')
      }
    })
  }

  //changePage
  changePage(e){
    this.getNews(e)
  }

  render() {
    return (
      <div>
        <Message 
        data={this.state.list} 
        type={'news'} 
        total={this.state.total} 
        changePage={this.changePage.bind(this)}
        current={this.state.current}></Message>
      </div>
    );
  }
}

export default News;