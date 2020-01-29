import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

import apiConfig from "../api/apiConfig";

function FormContatos(props) {
  const FormItem = Form.Item;
  const contato = props.contato

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
    console.log(e)

    if (id !== ""){
      apiConfig.updateContato(id, name, email, phone, gender, birthday);
    } else {
      apiConfig.createContatos(name, email, phone, gender, birthday);
    }
  };

  useEffect(() => {
    if(props.id){
      let data = apiConfig.specificContato(props.id)
        .then((result) => {
          let d = result[0].info
          setId(props.id);
          setName(d.name);
          setEmail(d.email);
          setPhone(d.phone);
          setGender(d.gender);
          setBirthday(d.birthday);
        })
    }
  }, []);

  return(
    <div>
      <h1>Cadastros</h1>
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
      <br />
      <Button type="primary" htmlType="submit" > Salvar </Button>
      </Form>
    </div>
    )
}

export default FormContatos;
