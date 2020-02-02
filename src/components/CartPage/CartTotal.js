import React from "react";
import { ProductConsumer } from "../../context";
import { FaRoad } from "react-icons/fa";
export default function CartTotal() {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {value => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-title text-center my-4">
                <button className="btn btn-outline-danger" onClick={clearCart}>
                  Clear Cart
                </button>
                    <h3>subtotal : ${cartSubTotal}</h3>
                    <h3>tax : ${cartTax}</h3>
                    <h3>total : ${cartTotal}</h3>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
