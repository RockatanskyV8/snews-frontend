import React, { useState, useEffect } from 'react';
import FormContatos from "./components/formContatos";
import ListContatos from "./components/listContatos";

import apiConfig  from './api/apiConfig'

function App() {

  const [contatos, setContatos] = useState([]);
  const [specificContato, setSpecificContato] = useState({});

  useEffect(() => {
    apiConfig.getContatos().then(function(data){
      setContatos(data)
    });
  }, []);

  const columnsContatos = [
    {title: 'ID',     dataIndex: 'id',            key: 'id',},
    {title: 'Name',   dataIndex: 'info.name',     key: 'name',},
    {title: 'Email',  dataIndex: 'info.email',    key: 'email',},
    {title: 'Phone',  dataIndex: 'info.phone',    key: 'phone',},
    {title: 'Gender', dataIndex: 'info.gender',   key: 'gender',},
    {title: 'BDay',   dataIndex: 'info.birthday', key: 'birthday',},
    {title: '', key: 'delete',
      render: (text) => (
          <button onClick = { (e) => { apiConfig.deleteContatos(String(text.id)) } } >Delete</button>
      ),
    },
    {title: '', key: 'update',
      render: (text) => (
          <button onClick = { (e) => {
            apiConfig.specificContato(text.id).then(function(data){
              setSpecificContato(data[0])
            });
           } } >Update</button>
      ),
    }
  ];

  return (
    <div>
    <table>
      <tbody>
        <tr>
          <td><FormContatos contato={specificContato}/></td>
          <td><ListContatos contatos={contatos} columnsContatos={columnsContatos}/></td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default App;
