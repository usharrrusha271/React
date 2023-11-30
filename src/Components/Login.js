import React from 'react'
import { Link } from 'react-router-dom';
import './SignUp';
const Login = () => {
  return (
    <div><br/><br/><br/><br/><br/>
    <form>
    <h2>Login</h2>
    <p>Name:
        <input type='text' name='name' id='' placeholder='Enter name'/><br/><br/>
       email: 
       <input type='email' name='email' id='' placeholder='Enter email'/><br/>
      <button>Login</button>
      <button> <Link to="/signup" className='nav-links'>SignUp</Link></button>
    </p>
    </form>  
    </div>
  )
}

export default Login