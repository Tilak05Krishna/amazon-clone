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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("If user \n");
        console.log(user);
        dispatch({
          type: "LOGIN",
          payload: {
            user,
          },
        });
      } else {
        console.log("If not user \n");
        console.log(user);
        dispatch({ type: "LOGOUT" });
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
