import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Auth() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(true)

    

  return (
    <div>
        <div>Authentication Page</div>
        <div className='login'>
            <h3>Login Page</h3>
            <label>E-mail</label>
            <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your E-mail' />
            <br />
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter your Password' />
            <br />
            <Link to='/dashboard'>
            <input type='submit' />
            </Link>
        </div>
        <div className='signup'>
            <h3>Signup Page</h3>
            <label>E-mail</label>
            <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your E-mail' />
            <br />
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter your Password' />
            <br />
            <label>Confirm Password</label>
            <input onChange={(e) => e.target.value !== password ? setDisabled(true) : setDisabled(false)} type='password' placeholder='Confirm your Password' />
            <br />
            <Link to='/dashboard'>
            <input type='submit' disabled={disabled} />
            </Link>
            <br />
        </div>
    </div>
  )
}

export default Auth