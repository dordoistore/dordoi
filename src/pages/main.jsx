import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Col, Input, Row } from "antd";
import axios from "axios";

import { API, BASE_URL } from "../contants/API";
import CardProduct from "../components/card/card";
import Cart from "../components/store/cart";
import { clearCart } from "../store/actions/cart-actions";
import { setProducts } from "../store/actions/product-actions";

import "./main.scss";
const Main = () => {
  const [search, setSearch] = useState("");
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalSum = cartItems?.reduce(
    (total, item) => total + item.quantity * Math.round(item.price_usd),
    0
  );

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const response = await axios.get(`${BASE_URL}/${API.products}`);
    dispatch(setProducts(response.data));
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container main">
      <div className="search">
        <Input
          type="text"
          addonBefore="код"
          onChange={handleChange}
          value={search}
          placeholder="Введите код карточки"
          style={{ width: 300 }}
        />
        <NavLink to="/add">
          <Button>Добавить товар</Button>
        </NavLink>
      </div>
      <Row gutter={16}>
        <Col span={6} push={18}>
          <h3>Корзина</h3>
          <Cart />
          <div className="total">Итого: {totalSum}</div>
          <div className="cart_button">
            <Button onClick={handleClearCart} className="button_clear">
              Очистить
            </Button>
            <Button>Готово</Button>
          </div>
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
          </div>
          <CardProduct search={search} />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
