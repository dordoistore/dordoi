import React from "react";
import {Button, Form, Input} from "antd";
import "./add-product.scss";
const AddProduct = () => {
    const [form] = Form.useForm();
    const onSubmit = (values) => {
        console.log('Received values of form: ', values);
        form.resetFields();
    };
  return (
    <Form className="add_product container" form={form} onFinish={onSubmit}>
      <Form.Item name="code"   rules={[
          {
              required: true,
              message: 'Заполните поле',
          },
      ]}>
        <Input type="text" addonAfter="code"      placeholder="Ввидите код"/>
      </Form.Item>
      <Form.Item name="name"   rules={[
          {
              required: true,
              message: 'Заполните поле',
          },
      ]}>
        <Input type="text" addonAfter="name" placeholder="Ввидите имя"/>
      </Form.Item>
      <Form.Item name="quantity"   rules={[
          {
              required: true,
              message: 'Заполните поле',
          },
      ]}>
        <Input type="number" addonAfter="quantity" placeholder="Ввидите количество"/>
      </Form.Item>
      <Form.Item name="yuan"   rules={[
          {
              required: true,
              message: 'Заполните поле',
          },
      ]}>
        <Input type="number" addonAfter="yuan" placeholder="Ввидите юянь"/>
      </Form.Item>
      <Form.Item name="usd"   rules={[
          {
              required: true,
              message: 'Заполните поле',
          },
      ]}>
        <Input type="number" addonAfter="usd" placeholder="Ввидите доллар"/>
      </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
  );
};

export default AddProduct;
