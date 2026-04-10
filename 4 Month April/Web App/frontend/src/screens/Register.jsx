import React from 'react'

const Register = () => {
  return (
    <div>
      <h2>Register Page</h2>

       <input type="text" placeholder="Enter Name"/>
       <input type="text" placeholder="Enter Email"/>
       <input type="text" placeholder="Enter Password"/>
       
      <button>Login</button>
      
      <p className='text-danger'>Already have an account? <a href="/">Login</a></p> 
    </div>
  )
}

export default Register
