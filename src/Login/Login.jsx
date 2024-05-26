
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     //nếu đặng nhập admin thì chuyển hướng đến trang dashboard
//     //nếu đăng nhập user thì chuyển hướng đến trang chính
//     //nếu đăng nhập thất bại thì thông báo lỗi
//     if(e.target.Email.value === 'admin' && e.target.password.value === 'admin'){
//       localStorage.setItem('token', 'admin');
//       window.location.href = '/dashboard';
//     }else{
//       alert('Đăng nhập thất bại');
//       localStorage.removeItem('token');
//       window.location.href = '/';
//     }
// }
const handleSubmit = (e) => {
  e.preventDefault();
  const email = e.target.Email.value;
  const password = e.target.password.value;
  if (email === 'admin' && password === 'admin') {
    localStorage.setItem('token', 'admin');
    window.location.href = '/dashboard';
  } else {
    alert('Đăng nhập thất bại');
    localStorage.removeItem('token');
    window.location.href = '/';
  }
}


  return (
    <div id='login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Email' name='Email' />
        <input type='password' placeholder='Password' name='password' />
        <div>
          <button type='submit'>Đăng nhập</button>
          <Link to={'/register'}>Bạn đã có tài khoản chưa ?</Link>
        </div>
      </form>
    </div>
  );
}
