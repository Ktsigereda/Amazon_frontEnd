import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carousel.module.css";
import {img} from "./images/data"

const CarouselEffect = () => {
  return (
  <div>
    <Carousel 
        autoPlay={true} 
        infiniteLoop={true} 
        showIndicators={false} 
        showThumbs={false} 
        showStatus={false} 
      >
      {
        img?.map((imageItemLink, i )=>{
        return <img key = {i} src={imageItemLink} />
        })
      }
  </Carousel>
  <div className={classes.hero_img}> </div>
  </div>
  )
}

export default CarouselEffect