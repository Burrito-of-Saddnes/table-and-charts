import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function PeopleAmount(props) {
  return(
    <div className='PeopleAmount'>
      <span className='PeopleAmount__span'>Общнее количество людей в таблице: {props.dataSource.length}</span>
      <span className='PeopleAmount__span'>Количество людей на странице:</span>
      <Select defaultValue={props.pageSize} onChange={props.handlePageSizeChange} style={{ width: 100 }}>
        <Option value={5}>5</Option>
        <Option value={10}>10</Option>
        <Option value={20}>20</Option>
      </Select>
    </div>
  )
}

export default PeopleAmount;