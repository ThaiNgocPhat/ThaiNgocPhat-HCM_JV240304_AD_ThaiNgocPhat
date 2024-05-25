import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="dashboard-items">
        <div className="dashboard-item">
          <h2>
            <Link to="#" onClick={() => toggleItem('revenue')}>
              Thống kê doanh thu
            </Link>
          </h2>
          {activeItem === 'revenue' && (
            <div>
              <p>Tổng doanh thu: $10,000</p>
              <p>Doanh thu tháng trước: $8,000</p>
              <p>Doanh thu tháng này: $2,000</p>
              {/* Thêm các thông tin khác cần thiết */}
            </div>
          )}
        </div>
        <div className="dashboard-item">
          <h2>
            <Link to="#" onClick={() => toggleItem('product')}>
              Thống kê sản phẩm
            </Link>
          </h2>
          {activeItem === 'product' && (
            <div>
              <p>Số lượng sản phẩm: 100</p>
              <p>Sản phẩm bán chạy nhất: ABC</p>
              <p>Sản phẩm tồn kho ít nhất: XYZ</p>
              {/* Thêm các thông tin khác cần thiết */}
            </div>
          )}
        </div>
        <div className="dashboard-item">
          <h2>
            <Link to="#" onClick={() => toggleItem('user')}>
              Thống kê user
            </Link>
          </h2>
          {activeItem === 'user' && (
            <div>
              <p>Tổng số người dùng: 500</p>
              <p>Người dùng mới đăng ký: 50</p>
              <p>Người dùng VIP: 10</p>
            </div>
          )}
        </div>
        <div className="dashboard-item">
          <h2>
            <Link to="#" onClick={() => toggleItem('pendingOrders')}>
              Đơn hàng đang chờ xử lý
            </Link>
          </h2>
          {activeItem === 'pendingOrders' && (
            <div>
              <p>Số lượng đơn hàng: 20</p>
              <p>Đơn hàng cần xử lý: 5</p>
              <p>Đơn hàng mới nhất: #123</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
