import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { addToCart } from "../../store/actions/cart-actions";
import ModalWrapper from "../modal/modal";
import {editProduct, removeFromProduct, setProducts} from "../../store/actions/product-actions";
import { API, BASE_URL } from "../../contants/API";

import "./card.scss";
const CardProduct = ({ search }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = useSelector((state) => state.products);
  const results = !search
    ? products
    : products.filter((card) => card.code?.includes(search));

  useEffect(() => {
      fetchProduct()
  }, [products]);
  const handleClick = (item) => {
    dispatch(addToCart(item));
  };
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
    const fetchProduct = async () => {
        const response = await axios.get(`${BASE_URL}/${API.products}`);
        dispatch(setProducts(response.data));
    };
  const handleEdit = (record) => {
    setSelectedProduct(record);
    setShow(true);
  };

    const updateProduct = async (updatedProduct) => {
        const response = await axios.put(`${BASE_URL}/${API.products}/${selectedProduct.code}`, updatedProduct);
        if (response.status === 200) {
            dispatch(editProduct(response.data));  // Здесь предполагается, что сервер возвращает обновленный продукт в ответе
        } else {
            console.error("Ошибка: не удалось обновить продукт");
        }
    };

    const deleteProduct = async (id) => {
        try {
            const response = await axios.delete(`http://your-api-url/products/${id}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const handleDelete = async (code) => {
        try {
            await deleteProduct(code);
            dispatch(removeFromProduct(code));
        } catch (error) {
            console.error(error);
        }
    };

  const columns = [
    {
      title: "Код",
      dataIndex: "code",
      sorter: (a, b) => a.code - b.code,
    },
    {
      title: "Название",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Кол-во",
      dataIndex: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Юань",
      dataIndex: "price_yuan",
      sorter: (a, b) => a.yuan - b.yuan,
      render: (text, record) => (
        <div>{parseFloat(record.price_yuan.toFixed(2))}</div>
      ),
    },
    {
      title: "Доллар",
      dataIndex: "price_usd",
      sorter: (a, b) => a.usd - b.usd,
      render: (text, record) => (
        <div>{parseFloat(record.price_usd.toFixed(2))}</div>
      ),
    },
    {
      title: "Действия",
      dataIndex: "actions",
      width: 150,
      render: (text, record) => (
        <div className="action">
          <Button onClick={() => handleEdit(record)}>Редактировать</Button>
          <Button onClick={() => handleDelete(record?.code)}>Удалить</Button>
        </div>
      ),
    },
  ];
  return (
    <div className="card">
      <Table
        columns={columns}
        dataSource={results}
        onChange={onChange}
        onRow={(record) => {
          return {
            onClick: (event) => {
              if (!event.target.closest(".action")) {
                handleClick(record);
              }
            },
          };
        }}
        pagination={false}
        bordered
        footer={() => 'Footer'}
      />

      <ModalWrapper
        title="Редактировать Товар"
        show={show}
        close={() => setShow(false)}
        selectedProduct={selectedProduct}
        updateProduct={updateProduct}
      />
    </div>
  );
};

export default CardProduct;
