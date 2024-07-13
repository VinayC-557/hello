import React from 'react';
import './components/HomeCoursel'
import './Home.css'
import HomeCoursel from './components/HomeCoursel';

const Home = () => {
  return (
    <div className='Home'>
      
           <div>
           
        <h2 className='welcometext'>Welcome To Official Page </h2>
        {/* <button type="button" className="btn btn-success">Get Started</button> <br/> <br/> */}
       
       </div>
       
 


<div>
  <center>
  <HomeCoursel />
  <p className='homepara'>this is a shopping & services website
</p>
</center>
</div>

    </div>
   
  
  )
}

export default Home;