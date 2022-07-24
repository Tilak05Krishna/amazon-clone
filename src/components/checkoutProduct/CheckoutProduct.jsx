import React from "react";
import "./checkoutProduct.css";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../actions";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const dispatch = useDispatch();

  const removeProductFromBasket = () => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="checkout__product">
      <img className="checkoutProduct__image" src={image} alt="" />
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
