import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  //fetching cart state from redux store
  const { cart } = useSelector((state) => state);
  //total amount
  const [totalAmount, setTotalAmount] = useState(0);

  //whenever the cart array changes we need to fetch the value of total amount
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div>
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items : {cart.length}</span>
              </p>
              <button>CheckOut Now</button>
            </div>

            <div>
              <p>Total Amount : ${totalAmount}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart is Empty</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
