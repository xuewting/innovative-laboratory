import React, { Component } from 'react'
import '../css/Sgin.scss'
import { Table, Icon, Button, Input, message } from 'antd'
import { POST, BASE_URL } from '../../../components/commonModules/POST'
import moment from 'moment'

class Sgin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data:[{
        name:'banana',
        time:'2018-3-3',
        content:'Tempora sed id accusamus quas deleniti doloremque officiis ad dolorem voluptatum quod! Quis voluptatibus incidunt, accusamus alias deleniti ipsam.',
        item:'科技实验室'
      }],
      filterDropdownVisible: false,
      searchText: '',
      filtered: false
    }
  }

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value })
  }

  componentWillMount () {
    POST('/labt/getRecord', `labId=${this.props.labid}`, re => {
      if (re.state == 1) {
        this.setState({ data:re.data })
      }else {
        message.error('服务器错误')
      }
    })
  }

  onSearch = () => {
    const { searchText } = this.state
    const reg = new RegExp(searchText, 'gi')
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: this.state.data.map((record) => {
        const match = record.name.match(reg)
        if (!match) {
          return null
        }
        return {
          ...record,
          name: (
            <span>
              {record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className='highlight'>{match[0]}</span>, text] : text
              ))}
            </span>
          )
        }
      }).filter(record => !!record)
    })
  }

  //导出表格
  export(){
    POST('/lab/exportRecord',`labId=${this.props.labid}`,re=>{
      if(re.state==1){
        if (re.state == 1) {
          let data = re.data
          let url = data.split("/")
          window.open(BASE_URL + '/' + url[2] + "/" + url[3])
          POST('/lab/deleteSheet', `fileName=${url[2] + "/" + url[3]}`, re => {
            if (re.state == 1) {

            } else {
              message.error('服务器错误')
            }
          })
        } else {
          message.error('服务器错误')
        }
      }else{
        message.error('服务器错误')
      }
    })
  }

  render () {
    const columns = [{
      title: '姓 名',
      dataIndex: 'user.name',
      key: 'user.name',
      width:'15%',
      filterDropdown: (
        <div className='custom-filter-dropdown'>
          <Input
            ref={ele => this.searchInput = ele}
            placeholder='Search name'
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type='primary' onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterIcon: <Icon type='smile-o' style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible
        }, () => this.searchInput && this.searchInput.focus())
      }
    }, {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
      width: '15%',
      render:text => {
        return (
          <div>{moment( text ).format('YYYY-MM-DD')}</div>
        ) 
}
    }, {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
      width: '50%'
    }, {
        title: '参与项目',
        dataIndex: 'item',
        key: 'item',
        width: '20%'
      }]
    return (
      <div style={{ paddingTop: 20, paddingRight: 15 }}>
        <div className='lab_sgin'>
          <div className='lab_sgin_head'>
            <h2>人员出勤情况表</h2>
          </div>
          <div className='lab_sgin_table'>
            <Table columns={columns} dataSource={this.state.data} />
          </div>
          <div className="lab_sgin_foot">
            <Button type='primary' style={{paddingLeft:15,paddingRight:15}} onClick={this.export.bind(this)}>导出表格</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Sgin
