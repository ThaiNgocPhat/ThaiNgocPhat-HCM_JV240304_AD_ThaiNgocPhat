// import React from 'react'
// import {Link} from 'react-router-dom'
// import './Login.css'
// export default function Login() {
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     e.target.reset()
//     //kiểm tra đăng nhập,nếu đăng nhập thành công thì chuyển hướng đến trang dashboard
//     //nếu đăng nhập admin thì chuyển hướng đến trang admin
//     //nếu đăng nhập user thì chuyển hướng đến trang user
//     //nếu đăng nhập thất bại thì hiển thị thông báo lỗi
//     //nếu đăng nhập thành công thì lưu thông tin đăng nhập vào localStorage
//     //nếu đăng nhập thất bại thì hiển thị thông báo lỗi
//     //viết code nào
    
//   }
//   return (
//     <div id='login'>
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
//             <input type='text' placeholder='Username' />
//             <input type='password' placeholder='Password' />
//             <div>
//               <button type='submit'>Đăng nhập</button>
//               <Link to={'/register'}>Bạn đã có tài khoản chưa ?</Link>
//             </div>
//         </form>
//     </div>
//   )
// }
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    // Kiểm tra logic đăng nhập
    if (username === 'admin' && password === 'adminPassword') {
      // Đăng nhập thành công với quyền admin
      localStorage.setItem('userType', 'admin');
      // Chuyển hướng đến trang admin
      window.location.href = '/dashboard';
    } else if (username === 'user' && password === 'userPassword') {
      // Đăng nhập thành công với quyền user
      localStorage.setItem('userType', 'user');
      // Chuyển hướng đến trang user
      window.location.href = '/user';
    } else {
      // Đăng nhập thất bại
      alert('Tên đăng nhập hoặc mật khẩu không chính xác');
    }
  };

  return (
    <div id='login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' name='username' />
        <input type='password' placeholder='Password' name='password' />
        <div>
          <button type='submit'>Đăng nhập</button>
          <Link to={'/register'}>Bạn đã có tài khoản chưa ?</Link>
        </div>
      </form>
    </div>
  );
}
