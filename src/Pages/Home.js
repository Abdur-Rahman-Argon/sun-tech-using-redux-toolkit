import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // const state = useSelector((state) => state);

  const stock = ""; //useSelector((state) => state.filters?.filters?.stock);
  const brand = ""; //useSelector((state) => state.filters?.filters?.brand);

  // const dispatch = useDispatch();

  // console.log(state);

  let content;

  const activeClass = " bg-slate-900 text-white border-white";

  if (products?.length) {
    content = products?.map((product) => <ProductCard product={product} />);
  }

  if (products?.length === 0) {
    content = <p> product is empty </p>;
  }
  console.log(products?.filter((product) => product.brand === "amd"));

  // if (products.length && (stock || brand.length)) {
  //   content = products
  //     .filter((product) => product.status === true)
  //     .filter((product) => brand.includes(product.brand))
  //     .map((product) => <ProductCard product={product} />);
  // }

  if (products.length && (stock || brand.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        } else {
          return product;
        }
      })
      .filter((product) => {
        if (brand.length) {
          return brand.includes(product.brand);
        } else {
          return product;
        }
      })
      .map((product) => <ProductCard product={product} />);
  }

  return (
    <div className=" mx-20">
      <div className="mb-10 flex justify-end gap-5">
        <button
          // onClick={() => dispatch(toggleStock())}
          className={` ${
            stock && activeClass
          }  border px-3 py-2 rounded-full font-semibold`}
        >
          In Stock
        </button>
        <button
          //onClick={() => dispatch(toggleBrand("amd"))}
          className={`${
            brand.includes("amd") && activeClass
          } border px-3 py-2 rounded-full font-semibold`}
        >
          AMD
        </button>
        <button
          //onClick={() => dispatch(toggleBrand("intel"))}
          className={`${
            brand.includes("intel") && activeClass
          } border px-3 py-2 rounded-full font-semibold`}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content}
      </div>
    </div>
  );
};

export default Home;
