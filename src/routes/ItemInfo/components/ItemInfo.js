import React, { Component } from 'react'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import '../css/info.scss'
import EditInfo from './EditInfo'
import { POST } from '../../../components/commonModules/POST'
import { message } from 'antd'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { convertFromRaw, EditorState, convertToRaw, ContentState } from 'draft-js'
import moment from 'moment'

class ItemInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      start: 'lorem',
      isEnd: false,
      pdata: '',
      con: '',
      rate: [],
      editorState: EditorState.createEmpty(),
      mem:'',
      id:'',
      isIn:0
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
    POST('/getMember', `pid=${this.props.location.query.id}`, re => {
      if (re.state == 1) {
        // this.setState({ mem:re.data })
        POST('/user/getUserInfo', ``, res => {
          if (res.state == 1) {
            // this.setState({ id: res.data.sid })
            for (let i in re.data) {
              if (re.data[i].uid == res.data.sid) {              
                this.setState({ isIn: 1 })
                break
              } else {
                continue
              }
            }
          } else {
            message.error('服务器错误')
          }
        })
        
      } else {
        message.error('服务器错误')
      }
    })

  }

  initrial () {
    POST('/getProjectById', `id=${this.props.location.query.id}`, re => {
      if (re.state == 1) {
        this.getOrigin(re.data.chargeUser);
        this.setState({ pdata: re.data })        
      } else {
        message.error('服务器错误')
      }
    })
  }
  // 获取发起人信息
  getOrigin (id) {
    console.log(id)
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
    POST('/getProRate', `id=${this.props.location.query.id}`, re => {
      if (re.state == 1) {
        this.setState({ rate: re.data })
        let len = re.data.length
        let i = 0
        while (i <= len && re.data[i].content) {
          let box = 'html' + i
          this.refs[box].innerHTML = re.data[i].content
          i = i + 1
        }
      } else {
        message.error('服务器错误')
      }
    })
  }

  render () {
    const { pdata, start, rate, isIn } = this.state
    console.log(isIn)
    return (
      <div style={{ width: 1250, margin: '0 auto' }}>
        <h2 style={{ color: '#fff', fontWeight: 600, paddingBottom:20 }}>{pdata.name}</h2>
        {isIn == 1
          ? <EditInfo
            id={this.props.location.query.id}
            getRate={this.getRate.bind(this)}
            initrial={this.initrial.bind(this)}
            end={this.state.pdata.actualTime == null ? 0 : 1} />
      : null}
        <div style={{ float: 'left', width: '100%' }}>
          <Timeline>
            <TimelineEvent title='项目启动'
              createdAt={moment(pdata.startTime).format('YYYY-MM-DD')}
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
              return (

                <TimelineEvent title={item.user ? item.user.name + '提交了进度': '' }
                  createdAt={moment(item.subTime).format('YYYY-MM-DD')}
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
                  <div ref={'html' + i} />
                </TimelineEvent>

              )
            })}

            {pdata.actualTime
              ? <TimelineEvent title='项目结束'
                createdAt={moment(pdata.actualTime).format('YYYY-MM-DD')}
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
