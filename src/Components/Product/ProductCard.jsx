import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"
import classes from "./Product.module.css"
import { Rating } from "@mui/material"
import {Link} from 'react-router-dom'
import { Type } from "../../Utility/action.type"
import { DataContext } from "../DataProvider/DataProvider"
import { useContext } from "react"

const ProductCard = ({product, flex, renderDescription, renderAdd}) => {
const {image, title, id, price, rating, description} = product;
const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET, 
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div className={`${classes.card_container} ${flex?classes.product_flexed:''}`}>
        <Link to={`/products/${id}`}>
            <img src={image} alt =""/>
          </Link>
          <div>
              <h3>{title}</h3>
              {renderDescription && <div style ={{maxWidth:"750px"}}>{description} </div>  }
              <div className={classes.rating}>
                <Rating value={rating?.rate || 0} precision={0.1} readOnly />
                  <small>{rating?.count || 0}</small>
                </div>
              <div>
                  {/* price */}
                  <CurrencyFormat amount={price} />
              </div>
              {
                renderAdd &&  <button className={classes.button} onClick={addToCart}> add to cart</button>
              }
          </div>

    </div>
  )
}

export default ProductCard