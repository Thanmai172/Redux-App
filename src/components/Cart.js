import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../store/cartSlice';
import CartItem from './CartItem';
import data from '../data.json'; // Replace with the correct path to your JSON file

const Cart = () => {
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // Load the JSON data into Redux store
    dispatch(setItems(data));
  }, [dispatch]);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
