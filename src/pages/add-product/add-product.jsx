import React from "react";
import axios from 'axios';

import {Button, Form, Input, Select} from "antd";
import {BASE_URL, API} from "../../contants/API";
import {openNotification} from "../../utils/notification-done";

import "./add-product.scss";


const AddProduct = () => {
  const [form] = Form.useForm();
  const onSubmit = async (values) => {

    await axios.post(`${BASE_URL}/${API.products}`, values);
    form.resetFields();
    //show tooltip 'Создано'
      openNotification()
  };
  return (
    <Form className="add_product container" form={form} onFinish={onSubmit}>
        <div>
            <Form.Item
                name="code"
                rules={[
                    {
                        required: true,
                        message: "Заполните поле",
                    },
                ]}
            >
                <Input type="text" addonBefore="Код" placeholder="Введите код"  />
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
                <Select
                    placeholder="Выберите фабрику"
                    options={[
                        {
                            value: 'china',
                            label: 'Китай',
                        },
                        {
                            value: 'usa',
                            label: 'Америка',
                        },
                    ]}
                />
            </Form.Item>
        </div>
        <div>
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
            <Form.Item style={{
                display: "flex",
                justifyContent:"flex-end"
            }}>
                <Button  htmlType="submit" className="button">
                    Сохранить
                </Button>
            </Form.Item>
        </div>

    </Form>
  );
};

export default AddProduct;
