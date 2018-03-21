import React, { Component } from 'react'
import './ProjectResult.scss'
import { Table, Input, Button, Icon } from 'antd'
import { POST } from '../../../components/commonModules/POST'
import Lab from '../../LabList/module/Lab'

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

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value })
  }
  onSearch = () => {
    const { searchText } = this.state
    const reg = new RegExp(searchText, 'gi')
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: this.state.data.map((record) => {
        const match = record.journal.match(reg)
        if (!match) {
          return null
        }
        return {
          ...record,
          name: (
            <span>
              {record.journal.split(reg).map((text, i) => (
                i > 0 ? [<span className='highlight'>{match[0]}</span>, text] : text
              ))}
            </span>
          )
        }
      }).filter(record => !!record)
    })
  }

  toDetail (record, index) {
    console.log(record, index)
  }

  getName(text){
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
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
           <Button type='primary' onClick={this.onSearch}>Search</Button>
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
      width: '10%',
    }, {
      title: '时间',
      dataIndex: 'winTime',
      key: 'winTime',
      width: '15%'
    }]
    console.log(this.props.paper)
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

