import { removeProduct } from "../../actions/productAction";

const deleteProduct = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:3050/data/${_id}`, {
      method: 'DELETE'
    });
    if(res?.status === 200) {
      dispatch(removeProduct(_id))
    }
  };
};

export default deleteProduct;