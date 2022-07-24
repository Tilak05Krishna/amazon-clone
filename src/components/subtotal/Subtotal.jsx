import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useSelector } from "react-redux";
import { getBasketTotal } from "../../reducers/basketReducer";

const Subtotal = () => {
  const basket = useSelector((state) => state.basket);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
        decimalScale={2}
        thousandSeparator={true}
        displayType="text"
        prefix="$"
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
