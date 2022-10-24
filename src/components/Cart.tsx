import React from 'react';
import {
    changeCartItemCounterDown,
    changeCartItemCounterUp,
    deleteItemFromCart,
} from '../features/cartSlice';

import { useAppDispatch, useAppSelector } from '../hooks';

const Cart: React.FC = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.order);

    const cartItemsSumm = () => {
        let sum = 0;
        cartItems.forEach((item) => {
            sum += item.price * item.counter;
        });
        return sum.toFixed(2);
    };

    return (
        <div>
            <h5>Cart</h5>
            {cartItems &&
                cartItems.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.title}
                            <span
                                onClick={() =>
                                    dispatch(deleteItemFromCart(item.id))
                                }
                            >
                                <span>{item.counter}</span>x
                            </span>
                            <span
                                onClick={() =>
                                    dispatch(changeCartItemCounterUp(item.id))
                                }
                            >
                                One more
                            </span>
                            <span
                                onClick={() =>
                                    dispatch(changeCartItemCounterDown(item.id))
                                }
                            >
                                One minus
                            </span>
                        </li>
                    );
                })}
            <span>Итоговая сумма: {cartItemsSumm()}</span>
            <span>Количество позиций в корзине: {cartItems.length}</span>
        </div>
    );
};

export default Cart;
