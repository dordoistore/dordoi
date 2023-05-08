import React, { useEffect } from "react";
import "./edit.scss";
import {Button, Form, Input, notification} from "antd";
const Edit = ({ selectedProduct, closeModal }) => {
  const [form] = Form.useForm();
  const openNotification = () => {
    notification.config({
      placement: 'topRight',
    });

    notification.success({
      message: 'Готово',
      description: 'Операция выполнена успешно',
    });
  };
  const onSubmit = (values) => {
    console.log("Received values of form: ", values);
    form.resetFields();
    closeModal();
    form.resetFields();
    openNotification();
  };
  useEffect(() => {
    if (selectedProduct) {
      form.setFieldsValue({
        code: selectedProduct.code,
        name: selectedProduct.name,
        quantity: selectedProduct.quantity,
        yuan: selectedProduct.yuan,
        usd: selectedProduct.usd,
      });
    } else {
      form.resetFields();
    }
  }, [selectedProduct]);


  return (
    <div className="edit">
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
          <Button htmlType="submit">Готово</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Edit;