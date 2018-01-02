import React, { Component } from 'react';
import './ProjectResult.scss'
import { Table, Input, Button, Icon } from 'antd'

class Paper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        key: '1',
        Iname: 'Lorem ipsum dolor sit amet',
        journal: '院级',
        teacher: '王老师',
        report:'banana',
        lab:'d0506',
        time: '2016-1-2'
      }, {
        key: '2',
        Iname: 'Lorem ipsum dolor sit amet',
        journal: '校级',
        teacher: '一等奖',
        report:'banana',
        lab:'d0506',
        time: '2016-1-2'
      }, {
        key: '3',
        Iname: 'Lorem ipsum dolor sit amet',
        journal: '省级',
        teacher: '一等奖',
        report:'banana',
        lab:'d0506',
        time: '2016-1-2'
      }, {
        key: '4',
        Iname: 'Lorem ipsum dolor sit amet',
        journal: '国家级',
        teacher: '一等奖',
        report:'banana',
        lab:'d0506',
        time: '2016-1-2'
      },],
      filterDropdownVisible: false,
      searchText: '',
      filtered: false,
    }
  }

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }
  onSearch = () => {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: this.state.data.map((record) => {
        const match = record.journal.match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          name: (
            <span>
              {record.journal.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    });
  }

  toDetail(record,index){
    console.log(record, index)
  }

  render() {
    const columns = [{
      title: '名称',
      dataIndex: 'Iname',
      key: 'Iname',
      width: '30%',
      render:(text,record,index)=>{
        return(
          <div className='i_name' onClick={this.toDetail.bind(this,record,index)}>
          {text}
          </div>
        )
      },
    }, {
      title: '期刊',
      dataIndex: 'journal',
      key: 'journal',
      width: '15%',
       filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type="primary" onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterIcon: <Icon type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible,
        }, () => this.searchInput && this.searchInput.focus());
      },
      // filters: [{
      //   text: '院级',
      //   value: '院级',
      // }, {
      //   text: '校级',
      //   value: '校级',
      // }, {
      //   text: '省级',
      //   value: '省级',
      // }, {
      //   text: '国家级',
      //   value: '国家级',
      // }],
      // onFilter: (value, record) => record.journal.indexOf(value) == 0,
    }, {
      title: '指导老师',
      dataIndex: 'teacher',
      key: 'teacher',
      width: '15%',
    }, {
      title: '发表人',
      dataIndex: 'report',
      key: 'report',
      width: '15%',
    }, {
      title: '实验室',
      dataIndex: 'lab',
      key: 'lab',
      width: '10%',
    }, {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
      width: '15%',
    }];
    return (
      <div>
        <Table columns={columns} dataSource={this.state.data}
          title={() => <div>
            <div className="com_head">
              <span>论文发表 :</span>
            </div>
          </div>} />
      </div>
    );
  }
}

export default Paper;