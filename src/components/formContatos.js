import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

import apiConfig from "../api/apiConfig";

function FormContatos(props) {
  const FormItem = Form.Item;
  return(
    <div>
      <h1>Cadastros</h1>
      <Form onSubmit={props.handleSubmit}>
        <FormItem label="Nome">
        <Input placeholder="Nome" value={props.name} onChange={props.onNameChange} autoComplete="off" />
        </FormItem>
        <FormItem label="Email">
        <Input placeholder="Email" value={props.email} onChange={props.onEmailChange} autoComplete="off" />
        </FormItem>
        <FormItem label="Phone">
        <Input placeholder="Phone" value={props.phone} onChange={props.onPhoneChange} autoComplete="off" />
        </FormItem>
        <FormItem label="Gender">
        <Input placeholder="Gender" value={props.gender} onChange={props.onGenderChange} autoComplete="off" />
        </FormItem>
        <FormItem label="Birthday">
        <Input placeholder="Birthday" value={props.birthday} onChange={props.onBirthdayChange} autoComplete="off" />
        </FormItem>
        <br />
        <Button type="primary" htmlType="submit" > Salvar </Button>
        <Button type="primary" onClick={ props.cancelUpdate } > Cancelar </Button>
      </Form>
    </div>
    )
}

export default FormContatos;
