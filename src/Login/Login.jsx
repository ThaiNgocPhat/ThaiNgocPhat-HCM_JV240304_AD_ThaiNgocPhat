import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
export default function Login() {
  return (
    <div id='login'>
        <h1>Login</h1>
        <form>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <div>
              <button type='submit'>Đăng nhập</button>
              <Link to={'/register'}>Bạn đã có tài khoản chưa ?</Link>
            </div>
        </form>
    </div>
  )
}
