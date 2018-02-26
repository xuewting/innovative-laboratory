import React, { Component } from 'react'
import Side from '../../LabCharge/components/Side'
import { browserHistory } from 'react-router'
import { Row, Col } from 'antd'

class NewItemDetail extends Component {
  // 边框页面跳转
  chargepage(value) {
    switch (value) {
      case 0:
        browserHistory.push({
          pathname: `/labcharge/detail`
        })
        this.setState({ chargepage: '/labcharge/detail' })
        break
      case 1:
        browserHistory.push({
          pathname: `/labcharge/staff`
        })
        this.setState({ chargepage: '/labcharge/staff' })
        break
      case 2:
        browserHistory.push({
          pathname: `/labcharge/item`
        })
        this.setState({ chargepage: '/labcharge/item' })
        break
      case 3:
        browserHistory.push({
          pathname: `/labcharge/honor`
        })
        this.setState({ chargepage: '/labcharge/honor' })
        break
      case 4:
        browserHistory.push({
          pathname: `/labcharge/goods`
        })
        this.setState({ chargepage: '/labcharge/goods' })
        break
      case 5:
        browserHistory.push({
          pathname: `/labcharge/teacher`
        })
        this.setState({ chargepage: '/labcharge/teacher' })
        break
      case 6:
        browserHistory.push({
          pathname: `/labcharge/notice`
        })
        this.setState({ chargepage: '/labcharge/notice' })
        break
      case 7:
        browserHistory.push({
          pathname: `/labcharge/news`
        })
        this.setState({ chargepage: '/labcharge/news' })
        break
      case 8:
        browserHistory.push({
          pathname: `/setting`
        }); break
    }
  }

  // 返回
  goBack = () => history.go(-1)

  render() {
    return (
      <div>
        <Row>
          <Col span={5} style={{ paddingRight: 5 }}>
            <Side chargepage={this.chargepage.bind(this)} />
          </Col>
          <Col span={19} style={{ paddingLeft: 5, paddingTop: 20, paddingRight: 15 }}>
            
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewItemDetail;