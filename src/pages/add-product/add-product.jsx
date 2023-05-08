import React from "react";
import { Button, Form, Input } from "antd";
import "./add-product.scss";
const AddProduct = () => {
  const [form] = Form.useForm();
  const onSubmit = (values) => {
    console.log("Received values of form: ", values);
    form.resetFields();
  };
  return (
    <Form className="add_product container" form={form} onFinish={onSubmit}>
      <Form.Item
        name="code"
        rules={[
          {
            required: true,
            message: "Заполните поле",
          },
        ]}
      >
        <Input type="text" addonBefore="Код" placeholder="Ввидите код" />
      </Form.Item>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Заполните поле",
          },
        ]}
      >
        <Input type="text" addonBefore="Название" placeholder="Ввидите имя" />
      </Form.Item>
      <Form.Item
        name="quantity"
        rules={[
          {
            required: true,
            message: "Заполните поле",
          },
        ]}
      >
        <Input
          type="number"
          addonBefore="Кол-во"
          placeholder="Ввидите количество"
        />
      </Form.Item>
      <Form.Item
        name="yuan"
        rules={[
          {
            required: true,
            message: "Заполните поле",
          },
        ]}
      >
        <Input type="number" addonBefore="Юань" placeholder="Ввидите юянь" />
      </Form.Item>
      <Form.Item
        name="usd"
        rules={[
          {
            required: true,
            message: "Заполните поле",
          },
        ]}
      >
        <Input
          type="number"
          addonBefore="Доллар"
          placeholder="Ввидите доллар"
        />
      </Form.Item>
      <Form.Item>
        <Button  htmlType="submit">
         Готово
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
