import React from "react";
import ProductCard from "../components/ProductCard";

const TopRated = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* {products
        ?.filter((p) => p.ratings >= 4)
        ?.map((product) => (
        ))} */}
      <ProductCard product={"product"} />
    </div>
  );
};

export default TopRated;
