import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import { useContext } from 'react';
import classes from "./Cart.module.css"
import { Link } from 'react-router-dom';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Type } from '../../Utility/action.type';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Cart = () => {
const [{ basket, user }, dispatch] = useContext(DataContext); 
const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount
  },0);

const increase =(item)=>{
  dispatch({
    type: Type.ADD_TO_BASKET,
    item
  })
}

const decrease =(id)=>{
  dispatch({
    type: Type.REMOVE_FROM_BASKET,
    id
  })
}

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          
          {basket?.length === 0 ? (<p>Oops! No items in your cart.</p> 
          ) : (
            basket?.map((item, i) => (
      <section className={classes.cart_product} >
          <ProductCard
                key={i} 
                product={item} 
                renderDescription={true} 
                flex={true} 
                renderAdd={false}
                />

            <div className={classes.cart_btn_container}>
              <button className={classes.update_btn} onClick={()=>increase(item)}> 
                <IoIosArrowUp size={20} />
              </button>
              <span> {item.amount}</span>
              <button className={classes.update_btn} onClick={()=>decrease(item.id)} > 
                <IoIosArrowDown size={20} />
              </button>
            </div>
      </section>

            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} /> 
            
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart