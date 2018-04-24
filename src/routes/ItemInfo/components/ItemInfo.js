import React, { Component } from 'react'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import '../css/info.scss'
import EditInfo from './EditInfo'
import { POST } from '../../../components/commonModules/POST'
import { message } from 'antd'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { convertFromRaw, EditorState, convertToRaw, ContentState } from 'draft-js'

class ItemInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      start: 'lorem',
      isEnd: false,
      pdata: '',
      con: '',
      rate: [],
      editorState: EditorState.createEmpty()

    }
  }
  // 返回
  goBack () {
    history.back()
  }

  // 页面初始化
  componentWillMount () {
    this.getRate()
    this.initrial()
  }

  initrial () {
    POST('/getProjectById', `id=${this.props.location.query.id}`, re => {
      if (re.state == 1) {
        this.setState({ pdata: re.data })
        this.getOrigin(re.data.chargeUser)        
      } else {
        message.error('服务器错误')
      }
    })
  }
  // 获取发起人信息
  getOrigin (id) {
    POST('/user/getUserInfo', `id=${id}`, re => {
      if (re.state == 1) {
        this.setState({ start: re.data.name })
      } else {
        message.error('获取启动人失败')
      }
    })
  }
  // 获得项目进度
  getRate () {
    POST('/user/getProRate', `id=${this.props.location.query.id}`, re => {
      if (re.state == 1) {
        this.setState({ rate: re.data })
        let len = re.data.length
        let i = 0
        while (i<=len){
          let box = 'html'+i
          this.refs[box].innerHTML = re.data[i].content
          i=i+1
        }
      } else {
        message.error('服务器错误')
      }
    })
  }

  render () {
    const { pdata, start, rate } = this.state
    return (
      <div style={{ width: 1250, margin: '0 auto' }}>
        <h2 style={{ color: '#fff', fontWeight: 600 }}>{pdata.name}</h2>
        <EditInfo id={this.props.location.query.id} getRate={this.getRate.bind(this)} initrial={this.initrial.bind(this)} end={this.state.pdata.actualTime==null?0:1}/>
        <div style={{ float: 'left', width: '100%' }}>
          <Timeline>
            <TimelineEvent title='项目启动'
              createdAt={pdata.startTime}
              icon={<i className='fa fa-hourglass-start' />}
              className='event'
              contentStyle={{ backgroundColor: 'transparent', color: '#fff', fontSize: 14 }}
              iconColor='#fff'
              bubbleStyle={{ backgroundColor: '#333' }}
              titleStyle={{ fontWeight: 'bold', color: '#fff' }}
              subtitle={`由${start}启动`}
              subtitleStyle={{ color: '#69b7ef', fontWeight: '500' }}
              cardHeaderStyle={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 4 }}
              container='card'
              style={{ backgroundColor: 'transparent', marginBottom: 30 }}
             />
            {rate.map((item, i) => {
              let box = 'html' + i 
              
              return (

                <TimelineEvent title={item.user.name + '提交了进度'}
                  createdAt={item.subTime}
                  icon={<i className='fa fa-calendar' />}
                  className='event'
                  contentStyle={{ backgroundColor: '#fff' }}
                  iconColor='#fff'
                  bubbleStyle={{ backgroundColor: '#333' }}
                  titleStyle={{ fontWeight: 'bold', color: '#fff' }}
                  subtitle='进度更新'
                  subtitleStyle={{ color: '#69b7ef', fontWeight: '500' }}
                  cardHeaderStyle={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.3)', borderTopRightRadius: 4, borderTopLeftRadius: 4 }}
                  container='card'
                  style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 4, boxShadow: '1px 2px 3px rgba(0,0,0,0.5)', marginBottom: 30 }}
                  key={i}
                >
                  <div ref={'html' + i}></div>             
                </TimelineEvent>

              )
            })}

            {pdata.resultsText
              ? <TimelineEvent title='项目结束'
                createdAt={pdata.actualTime}
                icon={<i className='fa fa-hourglass-end' />}
                className='event'
                contentStyle={{ backgroundColor: 'transparent', color: '#fff', fontSize: 14 }}
                iconColor='#fff'
                bubbleStyle={{ backgroundColor: '#333' }}
                titleStyle={{ fontWeight: 'bold', color: '#fff' }}
                subtitle='end Project'
                subtitleStyle={{ color: '#69b7ef', fontWeight: '500' }}
                cardHeaderStyle={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 4 }}
                container='card'
                style={{ backgroundColor: 'transparent', marginBottom: 30 }}
               /> : <div />}
          </Timeline>
          <div className='infofooter'>
            <div className='set' onClick={this.goBack.bind(this)}>
              <i className='fa fa-sign-out' /> 返回
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemInfo
