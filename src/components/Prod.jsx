import React from "react";
import "./product.css";

export const Prod = ({ product, cart, setCart }) => {
    const addCart = () => {
        setCart([...cart, product]);
    };
    const removeCart = () => {
        setCart(cart.filter((c) => c.id !== product.id));
    };
  return (
    <div className="product">
      <div className="img">
        <img src={product.pic} alt={product.name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>Price:{product.amt}</p>
              {cart.includes(product) ? 
                       <button className="btnRemove" onClick={removeCart}>Remove From Cart</button>:<button onClick={addCart}>Add To Cart</button>
        }
      </div>
    </div>
  );
};
