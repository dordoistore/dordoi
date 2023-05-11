import React from "react";
import axios from 'axios';
import { Button, Form, Input } from "antd";

import "./add-product.scss";
import {BASE_URL, API} from "../../contants/API";

const AddProduct = () => {
  const [form] = Form.useForm();
  const onSubmit = async (values) => {

    const payload = {
      code: values.code,
      name: values.name,
      factory: values.factory,
      quantity: +values.quantity,
      price_yuan: +values.yuan,
      price_usd: +values.usd
    }

    await axios.post(`${BASE_URL}/${API.products}`, payload);
    form.resetFields();
    //show tooltip 'Создано'
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
        <Input type="text" addonBefore="Код" placeholder="Введите код" />
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
            name="factory"
            rules={[
                {
                    required: true,
                    message: "Заполните поле",
                },
            ]}
        >
            <Input type="text" addonBefore="Фабрика" placeholder="Введите имя фабрики" />
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
        name="yuan"
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
          placeholder="Цена в долларах"
        />
      </Form.Item>
      <Form.Item>
        <Button  htmlType="submit">
         Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
