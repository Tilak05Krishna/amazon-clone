import React from "react";
import "./checkoutProduct.css";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../actions";
import axios1 from "../../axios";
import { useSelector } from "react-redux";

const CheckoutProduct = ({ id, imageUrl, title, price, rating }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const removeProductFromBasket = async () => {
    await axios1({
      method: "DELETE",
      url: `/users/${user.uid}/cartItems/${id}`,
    });
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="checkout__product">
      <img className="checkoutProduct__image" src={imageUrl} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeProductFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
