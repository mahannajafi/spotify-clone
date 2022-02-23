import React from 'react'
import './Login.css'
import { accessUrl } from './spotify'


const AUTH_URL = 
function Login() {
  return (
    <div className='login'>
      <img className='login__image' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
      <a href={accessUrl} className='login__a'>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login