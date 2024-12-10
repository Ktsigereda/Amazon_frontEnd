
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/LandingPage/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function Router() {
    const stripePromise = loadStripe('pk_test_51LbrkLLF1TpSGnArAzaVIeqMg8IRm8SHWO20oCAFMBE8lPaa9uT45lqoRWg8TnQDHSb469NCsrSObpSbZsO0UNXg00kp8P7PHm');
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/auth" element={<Auth />} />
                <Route 
                path="/payments"
            element={
        <ProtectedRoute msg={"You must log in to pay" } redirect={"/payments"}>
            <Elements stripe={stripePromise}> 
                    <Payment/>
            </Elements>
        </ProtectedRoute>
                }/>
                <Route path="/orders" element={
                    
                    <ProtectedRoute msg={"You must log in to see your orders" } redirect={"/orders"}>
                            <Orders/> 
                    </ProtectedRoute>
                    }/>
                <Route path="/cart" element={<Cart />} />
                <Route path="/category/:categoryName" element={<Results />} />
                <Route path="/products/:productId" element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Router