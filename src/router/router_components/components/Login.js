import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
      <center>
      <form className='Login'>
      
       
        <h1>LOGIN</h1> <br/>
        <div class="row mb-3" className='loginusername'>
      
        <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3" placeholder='Enter email'/>
        </div>
        </div> <br/> 
          <div class="row mb-3" className='loginuserpassword'>
        
        <div class="col-sm-10">
       <input type="password" class="form-control" id="inputPassword3" placeholder='Password'/>
        </div>
        </div> <br/>

        <button type="submit" class="btn btn-primary" className='loginbutton'>Sign in</button> <br/> <br/>

        <h2 className='cc'>Sign up</h2> <h2 className='cc'>Forgot password ?</h2>
        

        
        </form>
        </center>

       
    

    </div>
  )
}

export default Login
