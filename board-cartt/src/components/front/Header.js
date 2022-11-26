import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

const Header = (props) => {
  const {countCartItems} = props

 
  return (
    <div>
       <div className='heading'>
               <h1> 
                <Link to="/" className='logo' > 
                 Shopping Cart
                </Link>
                </h1>
    
               <h5>
                   <Link to="/cart" className='logo' >
                   Cart  
                      <sup>
                          {countCartItems}
                       </sup>
                   </Link>
                 </h5>
   
          </div>


 

    </div>
  )
}

export default Header