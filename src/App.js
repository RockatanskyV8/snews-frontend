import React, { useState, useEffect } from 'react';
import FormContatos from "./components/formContatos";
import ListContatos from "./components/listContatos";

import apiConfig  from './api/apiConfig'
import 'antd/dist/antd.css';

function App() {

  const [contatos, setContatos] = useState([]);

  const [id, setId]             = useState("")
  const [name, setName]         = useState("")
  const [email, setEmail]       = useState("")
  const [phone, setPhone]       = useState("")
  const [gender, setGender]     = useState("")
  const [birthday, setBirthday] = useState("")

  const onNameChange = e => { setName(e.target.value); };
  const onEmailChange = e => { setEmail(e.target.value); };
  const onPhoneChange = e => { setPhone(e.target.value); };
  const onGenderChange = e => { setGender(e.target.value); };
  const onBirthdayChange = e => { setBirthday(e.target.value); };

  const handleSubmit = e => {
    e.preventDefault();

    if (id !== ""){
      apiConfig.updateContato(id, name, email, phone, gender, birthday);
    } else {
      apiConfig.createContatos(name, email, phone, gender, birthday);
    }
  };

  const cancelUpdate = () => {
      setId("");
      setName("");
      setEmail("");
      setPhone("");
      setGender("");
      setBirthday("");
  }

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
              let d = data[0].info;
              setId(text.id);
              setName(d.name);
              setEmail(d.email);
              setPhone(d.phone);
              setGender(d.gender);
              setBirthday(d.birthday);
            });
           } } >Update</button>
      ),
    }
  ];

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th><h1>Formulário</h1></th>
          <th><h1>Lista</h1></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <FormContatos
              handleSubmit={handleSubmit}
              name={name}
              onNameChange={onNameChange}
              email={email}
              onEmailChange={onEmailChange}
              phone={phone}
              onPhoneChange={onPhoneChange}
              gender={gender}
              onGenderChange={onGenderChange}
              birthday={birthday}
              onBirthdayChange={onBirthdayChange}
              cancelUpdate={cancelUpdate}
            />
          </td>
          <td><ListContatos
                contatos={contatos}
                columnsContatos={columnsContatos}
                />
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default App;


/*

<Form onSubmit={handleSubmit}>
<FormItem label="Nome">
<Input placeholder="Nome" value={name} onChange={onNameChange} autoComplete="off" />
</FormItem>
<FormItem label="Email">
<Input placeholder="Email" value={email} onChange={onEmailChange} autoComplete="off" />
</FormItem>
<FormItem label="Phone">
<Input placeholder="Phone" value={phone} onChange={onPhoneChange} autoComplete="off" />
</FormItem>
<FormItem label="Gender">
<Input placeholder="Gender" value={gender} onChange={onGenderChange} autoComplete="off" />
</FormItem>
<FormItem label="Birthday">
<Input placeholder="Birthday" value={birthday} onChange={onBirthdayChange} autoComplete="off" />
</FormItem>
*/
