import React from 'react';
import { Form, Input, DatePicker, Select, Button } from 'antd';

const { Option } = Select;

function FormContatos(props) {
  const FormItem = Form.Item;

  const dateFormat = 'DD/MM/YYYY';

  return(
    <div>
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
        <Select  placeholder="Gender" value={props.gender} onChange={props.onGenderChange} >
          <Option value="masculino">M</Option>
          <Option value="feminino">F</Option>
          <Option value="N/A">N/A</Option>
        </Select>
        </FormItem>
        <FormItem label="Birthday">
        <DatePicker placeholder="Birthday" format={dateFormat} onChange={props.onBirthdayChange} />
        </FormItem>
        <br />
        <Button type="primary" htmlType="submit" > Salvar </Button>
        <Button type="primary" onClick={ props.cancelUpdate } > Cancelar </Button>
      </Form>
    </div>
    )
}

export default FormContatos;
