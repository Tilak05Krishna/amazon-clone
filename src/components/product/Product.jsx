import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../actions";
import axios1 from "../../axios";
import { useNavigate } from "react-router";

const Product = (product) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addToBasketFunc = async () => {
    if (Object.keys(user).length === 0) {
      navigate("/login");
    }
    try {
      if (Object.keys(user).length !== 0) {
        const cartItem = await axios1({
          method: "post",
          url: `users/${user.uid}/cartItems`,
          data: product,
        });
        dispatch(addToBasket(cartItem.data));
      }
    } catch (error) {
      console.log(`Error when posting cart items is: \n${error}`);
    }
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{product.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        <div className="product__rating">
          {Array(product.rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={product.imageUrl} alt="" className="product__image" />
      <button onClick={addToBasketFunc}>Add to basket</button>
    </div>
  );
};

export default Product;
