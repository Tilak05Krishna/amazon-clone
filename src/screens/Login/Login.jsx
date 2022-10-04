import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event) => {
    event.preventDefault(); // stops the refresh when submitting the form
    const loggedIn = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((e) => {
      alert(e.message);
    });
    if (loggedIn) {
      navigate("/");
    }
  };

  const register = async (event) => {
    event.preventDefault();
    const loggedIn = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((e) => {
      alert(e.message);
    });
    if (loggedIn) {
      navigate("/");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      <div className="login__container">
        <h1 className="h1__1">Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
