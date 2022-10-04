import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import CheckoutProduct from "../../components/checkoutProduct/CheckoutProduct";
import Subtotal from "../../components/subtotal/Subtotal";
import { useNavigate } from "react-router";

const Checkout = () => {
  const navigate = useNavigate();
  const basket = useSelector((state) => state.basket);
  const user = useSelector((state) => state.user);
  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket?.length === 0 ? (
          <div>
            <h3 className="checkout__greeting">Hello {user?.email}</h3>
            <h2 className="checkout__title">Your shopping basket is empty</h2>
            {Object.keys(user).length !== 0 && (
              <p>
                You have no items in your basket. To buy one or more, click "Add
                to basket" next to the item.
              </p>
            )}
            {Object.keys(user).length === 0 && (
              <button
                onClick={() => navigate("/login")}
                className="checkout__signInButton"
              >
                Sign in/Sign up
              </button>
            )}
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket.</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length !== 0 ? (
        <div className="checkout__right">
          <Subtotal />
        </div>
      ) : null}
    </div>
  );
};

export default Checkout;
