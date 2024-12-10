
import LayOut from '../../Components/LayOut/LayOut'
import classes from "./ProductDetail.module.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { productUrl } from '../../API/EndPoints';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';

const ProductDetail = () => {
  const {productId} = useParams()
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // console.log(productId);
  useEffect(()=>{
      setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
  // console.log(res)
      setProduct(res.data)
      setIsLoading(false)
    }).catch((err)=>{
    console.log(err)
      setIsLoading(false)
  })
  },[])
  return (
    <LayOut>
      { isLoading?(<Loader/>):(  <ProductCard
        product={product}
        flex={true}
        renderDescription={true}
        renderAdd={true}
        />
      )
      }

    </LayOut>
    
  )
}

export default ProductDetail