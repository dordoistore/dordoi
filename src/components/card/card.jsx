import React, { useState } from "react";
import { Table } from "antd";
import "./card.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import ModalWrapper from "../modal/modal";

const CardProduct = ({ search }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      sorter: (a, b) => a.code - b.code,
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Yuan",
      dataIndex: "yuan",
      sorter: (a, b) => a.yuan - b.yuan,
    },
    {
      title: "USD",
      dataIndex: "usd",
      sorter: (a, b) => a.usd - b.usd,
    },
    {
      title: "Действия",
      dataIndex: "actions",
      width: 150,
      render: (text, record) => (
        <div className="action">
          <div onClick={() => setShow(!show)}>Редактировать</div>
          <div>Удалить</div>
        </div>
      ),
    },
  ];

  const [product, setProduct] = useState([
    {
      code: "111111",
      name: "adidas",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
    {
      code: "22222",
      name: "lining",
      quantity: 1,
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
      code: "1222211",
      name: "berska",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
    {
      code: "1222211",
      name: "berska",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
    {
      code: "1222211",
      name: "berska",
      quantity: 1,
      yuan: 10,
      usd: 90,
    },
    {
      code: "1222211",
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
    console.log("Редактировать:", record);
    // Здесь добавьте ваш код для редактирования элемента
  };

  const handleDelete = (record) => {
    console.log("Удалить:", record);
    // Здесь добавьте ваш код для удаления элемента
  };
  return (
    <div className="card">
      <Table
        columns={columns}
        dataSource={results}
        onChange={onChange}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => handleClick(record),
          };
        }}
        pagination={false}
        bordered
      />

      <ModalWrapper
        title="Редактировать Товар"
        show={show}
        close={() => setShow(false)}
      />
    </div>
  );
};

export default CardProduct;
