import React, { useState } from "react";
import {Button, Table} from "antd";
import "./card.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import ModalWrapper from "../modal/modal";

const CardProduct = ({ search }) => {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
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
      dataIndex: "yuan",
      sorter: (a, b) => a.yuan - b.yuan,
    },
    {
      title: "Доллар",
      dataIndex: "usd",
      sorter: (a, b) => a.usd - b.usd,
    },
    {
      title: "Действия",
      dataIndex: "actions",
      width: 150,
      render: (text, record) => (
        <div className="action">
          <Button onClick={() => handleEdit(record)}>Редактировать</Button>
          <Button>Удалить</Button>
        </div>
      ),
    },
  ];

  const [product, setProduct] = useState([
    {
      code: "111111111111111111111111111111",
      name: "adidas",
      quantity: 5,
      yuan: 10,
      usd: 90,
    },
    {
      code: "22222",
      name: "lining",
      quantity: 3,
      yuan: 10,
      usd: 90,
    },
    {
      code: "3333",
      name: "puma",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
    {
      code: "44444",
      name: "nike",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
    {
      code: "55551",
      name: "reebok",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
    {
      code: "12",
      name: "berska",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
    {
      code: "22",
      name: "berska",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
    {
      code: "13",
      name: "berska",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
    {
      code: "14",
      name: "berska",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
    {
      code: "8",
      name: "berska",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
    {
      code: "7",
      name: "berska",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
    {
      code: "6",
      name: "berska",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
    {
      code: "21",
      name: "berska",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
  ]);

  const results = !search
    ? product
    : product.filter((card) => card.code?.includes(search));

  const handleClick = (item) => {
    dispatch(addToCart(item));
  };
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };


  const handleEdit = (record) => {
    setSelectedProduct(record);
    setShow(true);
  };

  const handleDelete = (record) => {
    console.log("Удалить:", record);
    // Здесь добавьте ваш код для удаления элемента
  };
  const updateProduct = (updatedProduct) => {
    setProduct(
        product.map((item) => (item.code === updatedProduct.code ? updatedProduct : item))
    );
  };
  return (
    <div className="card">
      <Table
        columns={columns}
        dataSource={results}
        onChange={onChange}
        onRow={(record) => {
          return {
            onClick: (event) => {
              if (!event.target.closest('.action')) {
                handleClick(record);
              }
            }
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
