import React from 'react';
import { Table } from 'antd';

function TabelList(props) {
  return(
    <Table
      {...props.tableConfig}
      onRow={(record) => ({
        onClick: () => props.handleNameClick(record.id),
      })}
    />
  )
}

export default TabelList;