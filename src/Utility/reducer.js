
import { Type } from "./action.type";

export const initialState = {
  basket:[],
  user:null
}
export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
//checking if the item exists
    const existingItem = state.basket.find((item) => item.id === action.item.id);
        if (!existingItem) {
            return{
            ...state,
        basket: [...state.basket, { ...action.item, amount: 1 }]
            }
        } else {      // If the item exists, increase its amount
          const updatedBasket = state.basket.map((item) => {
          return item.id === action.item.id? { ...item, amount: item.amount + 1 } : item  
        });

          return {
            ...state,
            basket: updatedBasket, // Update the state with the new basket
          };
      }
    
      case Type.REMOVE_FROM_BASKET:
          
       // Find the index of the item in the basket
      const index = state.basket.findIndex(item => item.id === action.id);
      let newBasket = [...state.basket];

        if (index >= 0) {
          if (newBasket[index].amount > 1) {
              newBasket[index] = {...newBasket[index],amount: newBasket[index].amount - 1,
          };
        }
        else {
     // If the amount is 1, remove the item from the basket
            newBasket.splice(index, 1);
          }
      }
      return {
          ...state,
        basket:newBasket// Update the state with the new basket
      }
  case Type.EMPTY_BASKET:
  return{
    ...state,
    basket:[],
  }
  case Type.SET_USER:
  return{
        ...state,
        user: action.user,
  };
    default:
      return state; 
  }
}