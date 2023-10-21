import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrands, toggleStock } from "../../redux/actions/filterActions";
import loadProductData from "../../redux/thunk/products/fetchProducts";

const Home = () => {
  const activeClass = "text-white  bg-indigo-500 border-white";

  const { brands, stock } = useSelector((state) => state.filter.filters) || {};
  const { products } = useSelector((state) => state.product) || {};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductData())
  }, [dispatch]);

  let content;

  if (products.length) {
    content = products.map((product) => (<ProductCard key={product.model} product={product} />))
  }

  if (products.length && stock && !brands?.length) {
    content = products.filter((option) => option.status === stock).map((product) => (<ProductCard key={product.model} product={product} />))
  }
  if (products.length && !stock && brands?.length) {
    content = products.filter((option) => brands.includes(option.brand)).map((product) => (<ProductCard key={product.model} product={product} />))
  }
  if (products.length && stock && brands?.length) {
    content = products.filter((option) => option.status === stock).filter((option) => brands.includes(option.brand)).map((product) => (<ProductCard key={product.model} product={product} />))
  }


  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          onClick={() => dispatch(toggleStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : ""} `}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrands("amd"))}
          className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("amd") ? activeClass : ""}`}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrands("intel"))}
          className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("intel") ? activeClass : ""}`}
        >
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {content}
      </div>
    </div>
  );
};

export default Home;
