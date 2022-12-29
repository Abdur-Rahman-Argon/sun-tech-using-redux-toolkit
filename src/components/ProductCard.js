import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import { BiListPlus } from "react-icons/bi";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div
      className="shadow-lg rounded-3xl relative border  p-3 flex flex-col text-indigo-900"
      key={product._id}
    >
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature) => {
            return <li className="text-sm ">{feature}</li>;
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {!location.pathname.includes("cart") && (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Add to cart
          </button>
        )}
        {location.pathname.includes("cart") && (
          <button
            onClick={() => dispatch(removeFromCart(product))}
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Remove From Cart
          </button>
        )}

        <button
          title="Add to wishlist"
          className="bg-indigo-500  py-1 px-2 rounded-full"
        >
          <BiListPlus className="text-white" />
        </button>
        {location.pathname.includes("cart") && (
          <button
            title="Add to wishlist"
            className="bg-indigo-500 absolute top-2 right-3 text-white  py-1 px-2 rounded-full"
          >
            {product?.quantity}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
