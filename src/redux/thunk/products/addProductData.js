import { addProduct } from "../../actions/productAction";

const addProductData = (product) => {
  return async (dispatch, getState)=> {
    const res = await fetch('http://localhost:3050/data', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await res.json();
    if(data.id.length) {
      dispatch(addProduct({
        ...product , 
        _id: data?.id,
      }));
    }
  };
};

export default addProductData;