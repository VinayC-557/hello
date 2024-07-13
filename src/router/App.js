import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './router_components/Home'
import Profile from './router_components/Profile';
import './App.css'
import About from './router_components/About';
// import Products from './router_components/Products'
import LoginPage from './router_components/LoginPage';


const App = () => {
  return (
    
    <div className='App'>
    
      <center>
        <Router>
        <header className='header'>
        <center>
        <Link to="/"> HOME </Link>
        <Link to="/Profile"> PROFILE </Link>
        <Link to="/About"> About </Link>
        {/* <Link to="/Products"> Products </Link> */}
        <Link to="/LoginPage"> Login </Link>

        
        </center>
    
        </header>
        
        <Routes>

        <Route exact path='/' element={<Home/>}> </Route>
        <Route exact path='/Profile' element={<Profile/>}> </Route>
        <Route exact path='/About' element={<About/>}> </Route>
        {/* <Route exact path='/Products' element={<Products/>}> </Route> */}
        <Route exact path='/LoginPage' element={<LoginPage/>}> </Route>


        </Routes>

        <footer className='footer'>
        <div class="container">
        <div class="row">
        <div class="col">
                 <h1 className='f_h1'>Contact Information</h1> <br/>
                <h2  className='f_h2'> Address: 123 Innovation Drive, Tech City, TX 75001</h2> 
                <h2  className='f_h2'>Phone: +1 (555) 123-4567</h2>     
                <h2  className='f_h2'>Email: contact@techsolutions.com</h2>   

               
        </div>


        <div class="col">
       <h1  className='f_h1'>Legal</h1> <br/>
       <h2 className='f_h2'> Privacy Policy</h2>
       <h2 className='f_h2'>Terms of Service</h2> 
       <h2 className='f_h2'> Cookie Policy</h2>
        </div>


        <div class="col">
        <h1 className='f_h1'> Follow Us</h1><br/>
        <h2 className='f_h2'>Facebook</h2>
        <h2 className='f_h2'>Twitter</h2>
        <h2 className='f_h2'>LinkedIn</h2>
        <h2 className='f_h2'> Instagram</h2>
        </div>
        </div>
        </div>
        </footer>
      </Router>

      </center>
   

      
    </div>
  )
}

export default App;

