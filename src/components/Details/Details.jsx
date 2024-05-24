import React, { useEffect, useState } from 'react';

export default function Details() {
  const [count, setCount] = useState(1); 
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const storedOrder = localStorage.getItem('order');
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    }
  }, []);

  if (!order || order.length === 0) {
    return <p>Không có món ăn nào được đặt</p>;
  }

  const selectedItem = order[0];

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleDelete = () => {
    setOrder([]);
    localStorage.removeItem('order');
  };

  const calculateTotal = (price, quantity) => {
    if (!price) return '0 VND';
    const priceNumber = parseFloat(price.replace(/,/g, '').replace(' VND', ''));
    const total = priceNumber * quantity;
    return total.toLocaleString('vi-VN') + ' VND';
  };

  const handleOrder = () => {
    alert('Đặt món thành công');
  };

  return (
    <>
      <h1>Chi tiết món ăn</h1>
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
            <tr>
              <td><img src={selectedItem.image} alt={selectedItem.name} style={{ width: '150px', height: '150px' }}/></td>
              <td>{selectedItem.name}</td>
              <td>{selectedItem.price}</td>
              <td>
                <button onClick={handleIncrease}>+</button>
                <span>{count}</span>
                <button onClick={handleDecrease}>-</button>
              </td>
              <td>{calculateTotal(selectedItem.price, count)}</td>
              <td>
                <button onClick={handleOrder}>Đặt cơm</button>    
                <button onClick={handleDelete}>Xoá</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
