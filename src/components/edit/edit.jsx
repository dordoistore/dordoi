import React, { useEffect } from "react";
import {Button, Form, Input} from "antd";

import {openNotification} from "../../utils/notification-done"

import "./edit.scss";
const Edit = ({ selectedProduct, closeModal,  updateProduct }) => {
  const [form] = Form.useForm();
    const onSubmit = (values) => {
        console.log("Received values of form: ", values);
        closeModal();
        updateProduct({...values, code: selectedProduct.code});
        openNotification()
    };

  useEffect(() => {
    if (selectedProduct) {
      form.setFieldsValue({
        code: selectedProduct.code,
        name: selectedProduct.name,
        quantity: selectedProduct.quantity,
        price_yuan: selectedProduct.price_yuan,
        price_usd: selectedProduct.price_usd,
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
          <Input type="text" addonBefore="Название" placeholder="Введите название" />
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
            placeholder="Введите количество"
          />
        </Form.Item>
        <Form.Item
          name="price_yuan"
          rules={[
            {
              required: true,
              message: "Заполните поле",
            },
          ]}
        >
          <Input type="number" addonBefore="Юань" placeholder="Цена в юанях" />
        </Form.Item>
        <Form.Item
          name="price_usd"
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
            placeholder="Цена в долларах"
          />
        </Form.Item>
        <Form.Item className="edit_button">
          <Button htmlType="submit">Сохранить</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Edit;
