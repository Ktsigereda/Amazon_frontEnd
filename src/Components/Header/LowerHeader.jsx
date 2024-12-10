import React from 'react';
import classes from "./header.module.css";
import { MdOutlineMenu } from "react-icons/md";

const LowerHeader = () => {
  return (
    <>
    <div className={classes.lower_container}>
      <ul>
        <li>
          <MdOutlineMenu /> 
          <p>All</p> 
        </li>
        <li>Today's Deals</li> 
        <li>Customer Services</li> 
        <li>Registry</li> 
        <li>Gift Cards</li> 
        <li>Sell</li> 
      </ul>
    </div>
    </>
  );
}

export default LowerHeader;
