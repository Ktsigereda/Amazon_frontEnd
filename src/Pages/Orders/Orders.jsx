import React, { useEffect, useState, useContext } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import {db} from "../../Utility/firebase"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import classes from "./Orders.module.css"
import ProductCard from "../../Components/Product/ProductCard"
const Orders = () => {
  const [{user}, dispatch] = useContext(DataContext)
  const [orders, setOrders] = useState([])
  useEffect(()=>{
    if(user){
 // Access the 'orders' collection in Firebase for the current user, sorted by creation time (desc)
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          // console.log(snapshot);
          // Map through the snapshot and update the orders state with the fetched data
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }else{
  setOrders([]); // If there's no user, clear the orders
    }

  },[])
  return (
    <LayOut>
  <section className={classes.container}>
    <div className={classes.orders_container}>
      <h2>Your Orders </h2>
       {/* If there are no orders, display a message */}
          {orders?.length === 0 && (
            <div style={{padding:"20px"}}>
              <p>You don't have orders yet.</p>
            </div>
          )}
      {/* ordered items */}
      <div>
        {orders?.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>Order ID: {eachOrder?.id}</p> {/* Display the order ID */}
                {eachOrder?.data?.basket?.map((order) => (
                  <ProductCard
                    key={order.id}
                    product={order} // Pass the product data to ProductCard
                    flex={true} // Apply flexible layout
                  />
                ))}
              </div>
            ))}
      </div>
    </div>
  </section>
    </LayOut>
  
  )
}

export default Orders