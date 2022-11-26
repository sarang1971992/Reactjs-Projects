import React from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Routes , Route} from 'react-router-dom';

const Moveroute = (props) => {
   const {productItems,cartItems,handleAddProduct, handleRemoveProduct} = props; 
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Product  productsItems={productItems}  handleAddProduct={handleAddProduct}/>}  />
      </Routes>     
      <Routes>
        <Route path='/cart' element={<Cart cartItems={cartItems}  handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />}  />
      </Routes>     
    </div>
     
   

  )
}

export default Moveroute;   