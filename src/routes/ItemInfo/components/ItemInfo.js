import React, { Component } from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline'
import img1 from '../../Home/assets/wallhaven-113384.png'
import '../css/info.scss'
import EditInfo from './EditInfo'


class ItemInfo extends Component {
  constructor(props) {
    super(props);
    this.state={
      start:'lorem'
    }
  }

  goBack(){
    history.back()
  }
  
  render() {
    return (
      <div style={{width:1250,margin:'0 auto'}}>
        <EditInfo></EditInfo>
        <div style={{float:'left',width:'100%'}}>
        <Timeline>
          <TimelineEvent title="John Doe sent a SMS"
            createdAt="2016-09-12 10:06 PM"
            icon={<i className='fa fa-hourglass-start' />}
            className='event'
            contentStyle={{ backgroundColor: "transparent", color: "#fff", fontSize: 14 }}
            iconColor="#fff"
            bubbleStyle={{ backgroundColor: "#333" }}
            titleStyle={{ fontWeight: "bold", color: '#fff' }}
            subtitle={`由${this.state.start}启动`}
            subtitleStyle={{ color: "#69b7ef", fontWeight: '500' }}
            cardHeaderStyle={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 4}}
            container="card"
            style={{ backgroundColor: 'transparent',marginBottom:30}}
          >
            </TimelineEvent>
          <TimelineEvent title="John Doe sent a SMS"
            createdAt="2016-09-12 10:06 PM"
            icon={<i className='fa fa-calendar' />}
            className='event'
            contentStyle={{ backgroundColor: "transparent", color: "#fff", fontSize: 14 }}
            iconColor="#fff"
            bubbleStyle={{ backgroundColor: "#333" }}
            titleStyle={{ fontWeight: "bold", color: '#fff' }}
            subtitle="Mail delivered"
            subtitleStyle={{ color: "#69b7ef", fontWeight: '500' }}
            cardHeaderStyle={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.3)', borderTopRightRadius: 4, borderTopLeftRadius: 4 }}
            container="card"
            style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 4, boxShadow: '1px 2px 3px rgba(0,0,0,0.5)',marginBottom:30 }}
          >
            I received the payment for $543. Should be shipping the item within a couple of hours.

            </TimelineEvent>
            <TimelineEvent title="John Doe sent a SMS"
            createdAt="2016-09-12 10:06 PM"
            icon={<i className='fa fa-hourglass-end' />}
            className='event'
            contentStyle={{ backgroundColor: "transparent", color: "#fff", fontSize: 14 }}
            iconColor="#fff"
            bubbleStyle={{ backgroundColor: "#333" }}
            titleStyle={{ fontWeight: "bold", color: '#fff' }}
            subtitle="项目结束"
            subtitleStyle={{ color: "#69b7ef", fontWeight: '500' }}
            cardHeaderStyle={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 4}}
            container="card"
            style={{ backgroundColor: 'transparent',marginBottom:30}}
          >
            </TimelineEvent>
        </Timeline>
        <div className="infofooter">
          <div className="set" onClick={this.goBack.bind(this)}>
            <i className='fa fa-sign-out'></i> 返回
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default ItemInfo;