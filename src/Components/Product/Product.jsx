import classes from "./Product.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import Loader from "../Loader/Loader"

const Product = () => {
const [product, setProduct] = useState([]);
const [isLoading, setIsLoading] = useState(false);

useEffect(()=>{
    setIsLoading(true)
    axios
    .get("https://fakestoreapi.com/products")
    .then((res)=>{
        // console.log(res)
        setProduct(res.data);
        setIsLoading(false)
    }).catch((err)=>{
        console.log(err)
            setIsLoading(false)
    });
}, []);
return (
    <>
        {
        isLoading?(<Loader/>):(<div className={classes.product_container}>
    {
    product?.map((singleProduct, i)=>{
    return <ProductCard renderAdd={true} product ={singleProduct} key ={i} />
})
}
        </div>)
        }
    </>
)
}


export default Product