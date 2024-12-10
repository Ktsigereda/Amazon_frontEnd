

import Router from './Router'
import { DataContext } from "./Components/DataProvider/DataProvider.jsx"
import { auth } from "./Utility/firebase.js"; 
import { Type } from "./Utility/action.type.js";
import { useContext, useEffect } from "react"; 


function App() {
const [{ user },dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // If a user is logged in, dispatch an action to set the user in the global state
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        // If no user is logged in, set the user to null in the global state
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []); 

  return (
    <>
<Router />
    </>
  )
}

export default App
