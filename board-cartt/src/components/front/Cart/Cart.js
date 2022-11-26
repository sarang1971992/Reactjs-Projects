import React from 'react'
import './Cart.css';

const Cart = (props) => {
   
  const {cartItems,handleAddProduct,handleRemoveProduct} = props;
  const totalPrice = cartItems.reduce( (price,item) => price + item.quantity * item.price, 0 ) 

   
  return (
   <>
          
          <h2>
             You have Ordered
          </h2>
          <div  className='empty'>
            {cartItems.length === 0 && ( <div className='cart'>No items were added</div> )} 
          </div>

        <div >
                {cartItems.map((item) => (
                     <div className='order-details-block' key={item.id}>
                       <div className='order-details'>
                          <div className='order-summary'>
                            <img src={item.image}  alt={item.name} height="210px" width="210px"/>
                            <div className='order-title'>
                           
                           <h4>Cotton Shirts</h4>
                           <p className='order-desc'>order description</p>
                           <p className='price'>$ {item.price}</p>

                         </div>

                          </div>
                           <div>
                           <button className='btn-add' onClick={() => handleAddProduct(item)}> + </button>
                             <p>{item.quantity} * {item.price} </p>
                           <button className='btn-remove' onClick={() => handleRemoveProduct(item)}> - </button>
                           </div>
                       </div>

                     </div>
                ))}

                  <div className='total-price'>
                       Total Price - ${totalPrice}
                  </div>   
        </div>
   
    </>
  )
}

export default Cart