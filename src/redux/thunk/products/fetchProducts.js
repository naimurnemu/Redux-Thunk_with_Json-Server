import { loadProduct } from "../../actions/productAction";

const loadProductData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:3050/data");
    const data = await res.json();
    if (data.length) {
      dispatch(loadProduct(data));
    };
  };
};

export default loadProductData;

