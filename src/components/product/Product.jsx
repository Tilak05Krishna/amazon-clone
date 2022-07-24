import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../actions";

const Product = ({ id, title, price, rating, image }) => {
  const dispatch = useDispatch();
  const addToBasketFunc = () => {
    dispatch(
      addToBasket({
        id,
        title,
        price,
        rating,
        image,
      })
    );
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="product__image" />
      <button onClick={addToBasketFunc}>Add to basket</button>
    </div>
  );
};

export default Product;
