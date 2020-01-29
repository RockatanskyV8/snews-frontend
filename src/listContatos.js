import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Popconfirm, Form} from 'antd';

import apiConfig  from './apiConfig'

function ListContatos(props) {

  return (
    <div className="App">
      <h1>Contatos</h1>
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
