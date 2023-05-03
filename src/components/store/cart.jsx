import React from 'react';
import {Card} from "antd";
import {useSelector} from "react-redux";
import {ReactComponent as Delete} from "../../assets/icons/delete.svg";
import "./cart.scss"
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../store/actions";
const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch()

    const handleDelete = (code) => {
        dispatch(removeFromCart(code));
    }
    return (
        <div className="cart">
            {cartItems.map((item) => (
                <Card key={item.code} className="cart_content" hoverable>
                   <div>{item.code}</div>
                    <div>{item.quantity}</div>
                    <div>{item.usd}</div>
                    <Delete onClick={() => handleDelete(item.code)}/>
                </Card>
            ))}
        </div>
    );
};

export default Cart;