import LayOut from "../../Components/LayOut/LayOut"
import Category from "../../Components/Category/Category"
import CarouselEffect from "../../Components/Carousel/CarouselEffect"
import Product from "../../Components/Product/Product"
const Landing = () => {
  return (
    <>
    <LayOut>
        <CarouselEffect />
        <Category />
        <Product />
    </LayOut>
    </>
    
  )
}

export default Landing