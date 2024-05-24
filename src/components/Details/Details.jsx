import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Details.css';

export default function Details() {
  const order = useSelector(state => state.order);
  const dispatch = useDispatch();

  if (!order || order.length === 0) {
    return <p>Không có món ăn nào được đặt</p>;
  }

  const handleIncrease = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const handleDecrease = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const calculateTotal = (price, quantity) => {
    if (!price) return '0 VND';
    const priceNumber = parseFloat(price.replace(/,/g, '').replace(' VND', ''));
    const total = priceNumber * quantity;
    return total.toLocaleString('vi-VN') + ' VND';
  };

  const calculateGrandTotal = () => {
    return order.reduce((acc, item) => {
      const priceNumber = parseFloat(item.price.replace(/,/g, '').replace(' VND', ''));
      return acc + priceNumber * item.quantity;
    }, 0).toLocaleString('vi-VN') + ' VND';
  };

  return (
    <>
      <h1>Đơn hàng</h1>
      <div className='details'>
        <table>
          <thead>
            <tr>
              <th>Hình Ảnh</th>
              <th>Tên Sản Phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Thành Tiền</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {order.map(item => (
              <tr key={item.id}>
                <td data-label="Hình Ảnh"><img src={item.image} alt={item.name} style={{ width: '150px', height: '150px' }}/></td>
                <td data-label="Tên Sản Phẩm">{item.name}</td>
                <td data-label="Giá">{item.price}</td>
                <td data-label="Số Lượng">
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                </td>
                <td data-label="Thành Tiền">{calculateTotal(item.price, item.quantity)}</td>
                <td data-label="Hành Động">
                  <button onClick={() => handleDelete(item.id)}>Xoá</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='grand-total'>
          <h2>Tổng tiền: {calculateGrandTotal()}</h2>
        </div>
      </div>
    </>
  );
}
