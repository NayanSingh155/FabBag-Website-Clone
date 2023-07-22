import axios from "axios";
// Actions

// Actions involving single product
export const ADD_PRODUCT = "ADD_PRODUCT";

export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const UPDATE_PRODUCT = "UPDATE_PRODUCT"; // updates quantity

// Actions involving multilple products
//  fetch cart data from database
export const ADD_PRODUCTS = "ADD_PRODUCTS";

const addProduct = (userId,productID,quantity) => async(dispatch) => {
    // add product to cart collection then fetch updated data from  db
      const newItem = {
        userId,
        mainproductId:productID,
        quantity
      };
      axios
        .post("https://cryptic-ocean-94076.herokuapp.com/cart/",newItem)
       
   
}

const removeProduct = (cartId) => async(dispatch) => {
  // remove product from cart collection & then fetch updated data from  db
      axios
        .delete("https://cryptic-ocean-94076.herokuapp.com/cart/" + cartId);
        

};

const updateProduct = (cartId, newQuantity) => async(dispatch) => {
  // update quantity in cart collection & then fetch updated data from  db
      axios
        .patch("https://cryptic-ocean-94076.herokuapp.com/cart/" + cartId,{quantity:newQuantity});
       
};

const addProducts = (products) => {
  
  // products; array of products
  return {
    type: ADD_PRODUCTS,
    payload: products,
  };
};
export const fetchCartItems = (userId) => async (dispatch) => {
  axios
    .get("https://cryptic-ocean-94076.herokuapp.com/cart/" + userId)
    .then(({ data }) =>
      data.map((el) => {
        return { ...el.mainproductId, cartId: el._id,quantity:el.quantity };
      })
    )
    .then((cartItems) => dispatch(addProducts(cartItems)));
};
export {addProduct,updateProduct,removeProduct};
