import React from "react";
import useCart from "../../Hooks/UseCart";
import useProduct from "../../Hooks/UseProducts";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart] = useCart(products);
  return (
    <div>
      <h1>This is Order : {products.length}</h1>
      <p>Cart: {cart.length}</p>
    </div>
  );
};

export default Orders;
