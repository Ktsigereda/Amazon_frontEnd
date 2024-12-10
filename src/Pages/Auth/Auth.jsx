import { Link,useNavigate, useLocation } from "react-router-dom"
import classes from "./Auth.module.css"
import {auth} from  "../../Utility/firebase"
import { useState, useContext } from "react"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {DataContext} from "../../Components/DataProvider/DataProvider"
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";
const Auth = () => {

  // State to track email, password, errors, and loading for sign in/up

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation()
// console.log(navStateData)
  // console.log(user)
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

console.log(password, email)

const authHandler =async(e) => {
    e.preventDefault(); // Prevent form submission
      console.log(e.target.name)
      if (e.target.name === "signIn") {
      // Handle Sign In
      setLoading({ ...loading, signIn: true }); 
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
           // Successful sign-in
          dispatch({
            type: Type.SET_USER, // Dispatch action to set user in global state
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false }); 
          navigate(navStateData?.state?.redirect||"/");
        }).catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false }); // Reset loading state

        });
    } else {
      // Handle Sign Up
      setLoading({ ...loading, signUp: true }); 
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
            dispatch({
            type: Type.SET_USER, // Dispatch action to set user in global state
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false }); 
            navigate(navStateData?.state?.redirect||"/");
          // Successful sign-up
        })
        .catch((err) => {
        setError(err.message); 
        setLoading({ ...loading, signUp: false }); // Reset loading state
        });
    } 
      
  };

  return (
  <section className={classes.login}>
    {/* Amazon logo*/}
    <Link to="/">
    <img src="https://www.hatchwise.com/wp-content/uploads/2022/08/Amazon-Logo-2000-present-1024x576.jpeg" alt=""/>
    </Link>

    {/* Authentication form */}
<div className={classes.login_container}>
        <h1>Sign In</h1>
      {
        navStateData?.state?.msg && (
          <small style={{
            padding: "5px",
            textAlign: "center",
            color: "red",
            fontWeight: "bold",
          }}>
        {navStateData?.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              type="password"
              id="password"
            />
          </div>
          {/* Sign In button */}
          <button
            type="submit"
            onClick={authHandler}
            name="signIn"
            className={classes.signIn_btn}
          > Sign in
            {loading.signIn ?(<ClipLoader color="#000" size={15}></ClipLoader> ) : ("Sign In") }
          </button>
        </form>

        {/* Agreement  */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, Cookies Notice, and our
          Interest-based Ads Notice.
        </p>

        {/* Create Account button */}
        <button
          type="submit"
          onClick={authHandler}
          name="signUp"
          className={classes.register_btn}
        > 
        {loading.signUp?(<ClipLoader color="#000" size={15}></ClipLoader> ) : (
          "Create your Amazon Account"
          ) }
        </button>

        {/* Error message */}
        {error && <small className={classes.login_error}>{error}</small>}
    </div>





















    

  </section>

  )
}

export default Auth