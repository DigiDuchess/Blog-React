import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    const register = (e)=>{
        e.preventDefault ();
       }
  return (
    
        <div className='Register'>
      <h1 >Register </h1>
      <div className='form-group'>
      <label htmlFor="Firstname"><h3>Firstname</h3></label>
      <input type="text" name='Firstname' placeholder='Enter Your Firstname...' />
      </div>

      <div className='form-group'>
      <label htmlFor="Secondname"><h3>Secondname</h3></label>
      <input type="text" name='Secondname' placeholder='Enter Your secondname...' />
      </div>
      
      <div className='form-group'>
      <label htmlFor="E-mail"><h3>E-mail</h3></label>
      <input type="E-mail" name='E-mail' placeholder='Enter Your E-mail...' />
      </div>
    

      <div className='form-group'>
     <label htmlFor="Password"><h3>Password</h3></label>
      <input type="Password" name='Password' placeholder='Enter Your Password...' />
      </div>

       
      <button className='registerButton' onClick={register}>Register</button>
      
      
      
      <h4>If You Already Register <Link to='/login'>Login</Link></h4>
      {/* <Link to='/'> <a> <p>register</p></a></Link> */}
      
    </div>
    
  )
}

export default Register
