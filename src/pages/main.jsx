import React, { useState } from "react";
import { Button, Col, Input, Row } from "antd";
import CardProduct from "../components/card/card";

import ModalWrapper from "../components/modal/modal";
import "./main.scss";

import Cart from "../components/store/cart";
import { NavLink } from "react-router-dom";
const Main = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="container main">
      <div className="search">
        <Input
          type="text"
          addonAfter="код"
          onChange={handleChange}
          value={search}
          placeholder="Введите код карточки"
          style={{ width: 300 }}
        />
      </div>
      <Row gutter={16}>
        <Col span={6} push={18}>
          <h3>Корзина</h3>
          <Cart />
        </Col>
        <Col span={18} pull={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>Товары</h3>
            <NavLink to="/add">
              <Button onClick={() => setShow(!show)}>Добавить товар</Button>
            </NavLink>
            <ModalWrapper show={show} close={() => setShow(false)} />
          </div>
          <CardProduct search={search} />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
