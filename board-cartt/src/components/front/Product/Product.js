import React from 'react'
import './Product.css';

const Product = (props) => {
   const {productsItems,handleAddProduct} = props;

    return (
    <>
            <h2>
            Our Items
          </h2>
    <div className="card"> 
       {productsItems.map((val,index) => {
                            return (
                     
                                <div className="single-card"   key={index}>
                      
                                  <div className="image" >
                                     <img alt="" src={val.image} width="100%" height="100%"/>
                                  </div>
                                  <div className="product-info" key={val.id}>
                                     <h4 className="product-title">{val.name}</h4>
                                     <p className="product-desc">{val.desc}</p>
                                     <p className="product-price">{val.price}<strike>Rs 350</strike></p>
                                  </div>
        
                        <button className="add-cart"  onClick={() => handleAddProduct(val)} >Add to cart</button>
          
                    </div>
                             
                           )
       })}
     </div>  
    </>  
    )
};
export default Product;