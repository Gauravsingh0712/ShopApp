import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ post }) => {
  //fetching cart from redux store
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const AddToCart = () => {
    dispatch(add(post));
  };

  const RemoveFromCart = () => {
    dispatch(remove(post.id));
  };

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={`${post.image}`} />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      {cart.some((p) =>
        p.id === post.id ? (
          <button onClick={RemoveFromCart}>Remove Item</button>
        ) : (
          <button onClick={AddToCart}>Add to Cart</button>
        )
      )}
    </div>
  );
};

export default Product;
