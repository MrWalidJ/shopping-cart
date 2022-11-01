import React, { useContext } from "react";
import { Cart } from "../Context";

const SingleProduct = ({ prod }) => {
    const { cart, setCart } = useContext(Cart); // make sure it's from context
  return (
    <div className="card col-3 m-3" style={{ width: "18rem" }}>
      <img src={prod.image} className="card-img-top" alt={prod.name} />
      <div className="card-body">
        <h5 className="card-title">{prod.name}</h5>
        <h5 className="card-text">{prod.price} NIS </h5>
      </div>

      {cart.includes(prod) ? (
        <button
          className="btn btn-primary w-100 my-2"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="btn btn-primary w-100"
          onClick={() => {
            setCart([...cart, prod]); // Add product to cart
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
