import React from "react";
import useCart from "../../Hooks/UseCart";
import useProduct from "../../Hooks/UseProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart] = useCart(products);
  const removeButton = (product) => {
    const rest = cart.filter(pd => pd.id !== product.id);
    setCart(rest)
  }
  return (
    <div className="shop-container">
      <div className="review-itemf-container">
        {
          cart.map(product => <ReviewItem key={product.id} product={product} remove={removeButton}></ReviewItem>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
