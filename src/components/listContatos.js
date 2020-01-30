import React from 'react';
import { Table } from 'antd';

function ListContatos(props) {

  return (
    <div className="App">
      <br />
      <Table
        dataSource={props.contatos}
        columns={props.columnsContatos}
        rowKey="id"
        loading={!props.contatos.length}
      />
    </div>
  );
}

export default ListContatos;
