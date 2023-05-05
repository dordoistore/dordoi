import React, { useState } from "react";
import { Card, Table } from "antd";
import "./card.scss";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";

const CardProduct = ({ search }) => {
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
    </div>
  );
};

export default CardProduct;
