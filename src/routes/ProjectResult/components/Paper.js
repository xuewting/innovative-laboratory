import React, { Component } from 'react'
import './ProjectResult.scss'
import { Table, Input, Button, Icon } from 'antd'
import { POST } from '../../../components/commonModules/POST'
// import Lab from '../../LabList/module/Lab'
import moment from 'moment'

class Paper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data:[],
      filterDropdownVisible: false,
      searchText: '',
      filtered: false
    }
  }

  onInputChange = (value) => {
    this.setState({ searchText: value })
  }
  onSearch = () => {
    const { searchText } = this.state
    console.log(searchText)
    const reg = new RegExp(searchText, 'gi')
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText

    })
  }

  toDetail (record, index) {
    console.log(record, index)
  }

  getName (text) {
    POST('/getLabById', `labId=${text}`, re => {
      if (re.state == 1) {
        return re.data.name
      } else {
      }
    })
  }
  render () {
    const columns = [{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      render:(text, record, index) => {
        return (
          <div className='i_name' onClick={this.toDetail.bind(this, record, index)}>
            {text}
          </div>
        )
      }
    }, {
      title: '期刊',
      dataIndex: 'magazine',
      key: 'magazine',
      width: '15%',
      filterDropdown: (
        <div className='custom-filter-dropdown'>
          <Input
             ref={ele => this.searchInput = ele}
             placeholder='Search name'
             value={this.state.searchText}
             onChange={(e) => this.onInputChange(e.target.value)}
             onPressEnter={this.onSearch.bind(this)}
          />
          <Button type='primary' onClick={this.onSearch.bind(this)}>Search</Button>
        </div>
      ),
      filterIcon: <Icon type='search' style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible
        }, () => this.searchInput && this.searchInput.focus())
      }
    }, {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
        width: '15%'
      }, {
      title: '实验室',
      dataIndex: 'lab.name',
      key: 'lab.name',
      width: '10%'
    }, {
      title: '时间',
      dataIndex: 'winTime',
      key: 'winTime',
      width: '15%',
      render:(text) => {
        return (
          <div>{moment(text).format('YYYY-MM-DD')}</div>
        )
      }
    }]

    return (
      <div>
        <Table columns={columns} dataSource={this.props.paper}
          title={() => <div>
            <div className='com_head'>
              <span>论文发表 :</span>
            </div>
          </div>} />
      </div>
    )
  }
}

export default Paper
// 查看labname
function newFunction (text) {

}

