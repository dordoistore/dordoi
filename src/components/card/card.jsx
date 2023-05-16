import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
    EditOutlined,
    DeleteOutlined,
    SearchOutlined

} from '@ant-design/icons';


import { addToCart } from "../../store/actions/cart-actions";
import ModalWrapper from "../modal/modal";
import {editProduct, fetchProducts, removeFromProduct, setProducts} from "../../store/actions/product-actions";
import { API, BASE_URL } from "../../contants/API";
import {round} from "../../utils/math";

import "./card.scss";
const { Option } = Select;
const CardProduct = ({ search }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = useSelector((state) => state.products);
  const results = !search
    ? products
    : products.filter((card) => card.code?.includes(search));
    const factories = ["Фабрика 1", "Фабрика 2", "Фабрика 3"];

  const handleClick = (item) => {
    dispatch(addToCart(item));
  };
  const onChange = (pagination, filters, sorter, extra) => {
  };
  const handleEdit = (record) => {
    setSelectedProduct(record);
    setShow(true);
  };

    const updateProduct = async (updatedProduct) => {
        const response = await axios.put(`${BASE_URL}/${API.products}/${selectedProduct.code}`, updatedProduct);
        if (response.status === 200) {
            dispatch(editProduct(response.data));
        } else {
            console.error("Ошибка: не удалось обновить продукт");
        }
        dispatch(fetchProducts())
    };

    const deleteProduct = async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}/${API.products}/${id}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const handleDelete = async (code) => {
        Modal.confirm({
            title: 'Вы уверены, что хотите удалить этот товар?',
            okText: 'Да, удалить',
            cancelText: 'Отмена',
            onOk: async () => {
                try {
                    await deleteProduct(code);
                    dispatch(removeFromProduct(code));
                } catch (error) {
                    console.error(error);
                }
            },
            onCancel() {
                console.log('Отмена удаления');
            },
        });
    };

  const columns = [
    {
      title: "Код",
      dataIndex: "code",
      sorter: (a, b) => a.code - b.code,
    },
      {
          title: "Фабрика",
          dataIndex: "factory",
          sorter: (a, b) => a.factory.localeCompare(b.factory),
          filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
              <div style={{ padding: 8 }}>
                  <Select
                      showSearch
                      style={{ width: 188, marginBottom: 8, display: "block" }}
                      placeholder="Выберите фабрику"
                      value={selectedKeys[0]}
                      onChange={value => setSelectedKeys(value ? [value] : [])}
                      onSearch={value => setSelectedKeys(value ? [value] : [])}
                      onPressEnter={() => confirm()}
                  >
                      {factories.map(factory => (
                          <Option key={factory}>{factory}</Option>
                      ))}
                  </Select>
                  <Button
                      type="primary"
                      onClick={() => confirm()}
                      size="small"
                      style={{ width: 90, marginRight: 8 }}
                  >
                      OK
                  </Button>
                  <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
                      Сброс
                  </Button>
              </div>
          ),
          filterIcon: filtered => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
          onFilter: (value, record) => record.factory.includes(value),
          onFilterDropdownVisibleChange: visible => {
              if (visible) {
                  // setTimeout(() => this.searchInput.select(), 100);
              }
          },
          render: text => text
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
        sorter: (a, b) => a.price_yuan - b.price_yuan,
      render: (text, record) => (
        <div>{round(record.price_yuan)}¥</div>
      ),
    },
    {
      title: "Доллар",
      dataIndex: "price_usd",
      sorter: (a, b) => a.price_usd - b.price_usd,
      render: (text, record) => (
        <div>{round(record.price_usd)}$</div>
      ),
    },
    {
      title: "Действия",
      dataIndex: "actions",
      width: 150,
      render: (text, record) => (
        <div className="action">
          <Button onClick={() => handleEdit(record)}><EditOutlined /></Button>
          <Button onClick={() => handleDelete(record?.code)}><DeleteOutlined /></Button>
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
