import React, { useState } from 'react'
import './App.css'

function AuthForm() {
    const [isLogin,setIsLogin]=useState(true);
  return (
    <div className='container'>
        <div className='form-container'>
            <div className='form-toggle'>
                <button className={isLogin ? 'active' : '' } onClick={()=>setIsLogin(true)}>Login</button>
                <button className={!isLogin?'active':''}onClick={()=>setIsLogin(false)}>SignUp</button>
            </div>
            {isLogin?
            <>
            <div className='form'>
            <h2>Login Form</h2>
            <input type="email" name="" id="" placeholder='Email'/>
            <input type="password" name="" id="" placeholder='Password' />
            <a href="#">Forgot Password</a>
            <button>Login</button>
            <p>Not a Member? <a href="#" onClick={()=>setIsLogin(false)}>Signup now</a></p>
            </div>
            </> :<>
            <div className='form'>
            <h2>SingUp Form</h2>
            <input type="email" name="" id="" placeholder='Email'/>
            <input type="password" name="" id="" placeholder='Password' />
            <input type="password" name="" id="" placeholder='Comfirm Password' />
            <p>Already have account <a href="#" onClick={()=>setIsLogin(true)}>Login</a></p>
            <button>SignUp</button>
            </div>
            </>
            }
        </div>
    </div>
  )
}

export default AuthForm