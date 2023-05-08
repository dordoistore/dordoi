import React, { useState } from "react";
import { Button, Card, Input } from "antd";
import { useSelector } from "react-redux";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import "./cart.scss";
import { useDispatch } from "react-redux";
import { clearCart, removeFromCart, updateQuantity } from "../../store/actions";

const Cart = () => {
  const [editingItem, setEditingItem] = useState(null);
  const [editingValue, setEditingValue] = useState("");
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleDelete = (code) => {
    dispatch(removeFromCart(code));
  };
  const handleEditStart = (code, quantity) => {
    setEditingItem(code);
    setEditingValue(quantity);
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleEditEnd = () => {
    // Обновление значения quantity в хранилище
    dispatch(
      updateQuantity({ code: editingItem, quantity: parseInt(editingValue) })
    );
    setEditingItem(null);
    setEditingValue("");
  };

  const handleInputChange = (event) => {
    setEditingValue(event.target.value);
  };

  return (
    <div className="cart">
      <div className="sort">
        <div>Код</div>
        <div>Кол-во</div>
        <div>Цена</div>
        <div>Общая цена</div>
      </div>
      {cartItems?.map((item) => (
        <Card key={item.code} className="cart_content" hoverable>
          <div className="cart_item_container">
            <div className="cart_item_code">{item.code}</div>
            <div onClick={() => handleEditStart(item.code, item.quantity)}>
              {editingItem === item.code ? (
                <Input
                  className="no-arrows"
                  type="number"
                  value={editingValue}
                  onChange={handleInputChange}
                  onBlur={handleEditEnd}
                  autoFocus
                />
              ) : (
                item.quantity
              )}
            </div>
            <div>{item.usd}</div>
            <div>{item.quantity * item.usd}</div>
          </div>
          <Delete onClick={() => handleDelete(item.code)} />
        </Card>
      ))}
      <div className="cart_button">
        <Button onClick={handleClearCart} className="button_clear">
          Очистить
        </Button>
        <Button>Готово</Button>
      </div>
    </div>
  );
};

export default Cart;
