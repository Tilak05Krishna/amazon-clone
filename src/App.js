import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./screens/home/Home";
import Checkout from "./screens/checkout/Checkout";
import Login from "./screens/Login/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { addToBasket } from "./actions/index";
import axios1 from "./axios";

function App() {
  const dispatch = useDispatch();

  const fetchCartItems = async (user) => {
    try {
      const cartItems = await axios1({
        method: "get",
        url: `users/${user.uid}/cartItems`,
      });
      for (const cartItem of cartItems.data) {
        dispatch(addToBasket(cartItem));
      }
    } catch (error) {
      console.log(`Error while fetching cart Items is: \n${error}`);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "LOGIN",
          payload: {
            user,
          },
        });
        fetchCartItems(user);
      } else {
        dispatch({ type: "LOGOUT" });
        dispatch({ type: "EMPTY_BASKET" });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
