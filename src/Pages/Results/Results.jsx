import React, { useState, useEffect } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../API/EndPoints';
import classes from "./Results.module.css"
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';
const Results = () => {
  const [results, setResults] = useState([]);
  const {categoryName} = useParams()
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
  // console.log(res)
      setResults(res.data)
      setIsLoading(false)
    }).catch((err)=>{
    console.log(err)
    setIsLoading(false)
  })
  },[])
  
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>category/{categoryName}</p>
        <hr />
            {
      isLoading?(<Loader/>):(
      <div className={classes.results_container}>
            {
              results?.map((product) => (
                <ProductCard 
                key={product.id}
                product={product} 
                renderAdd={true}
                renderDescription={false}
                />
              ))
            }
          </div>)
            }   
      </section>
    </LayOut>

  )
}

export default Results