import styled from "styled-components";
import PriceSection from "./PriceSection";
import ProductSection from "./ProductSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, updateProduct } from "../../Redux/cart/actions";
const CartWrapper = styled.div`
  margin: auto;
  width: 80%;
  h1 {
    font-weight: 400;
  }
  #cart-details {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .product-section {
    flex-grow: 7;
  }
  .price-section {
    flex-grow: 3;
  }
  @media (max-width: 767.98px) {
    width: 97%;
    #cart-details {
      display: block;
    }
  }
`;
function Cart() {
  // const userId = "62726e3abe5681299166cb87";
  const userId = useSelector((store) => store.userId.userId);
  // console.log(userId);
  const updateCart = () => {
    // console.log("updated cart");
    dispatch(fetchCartItems(userId));
  };

  // const [products, setProducts] = useState([]);
  const cartItems = useSelector((store) => store.cart);
  // console.log(cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    updateCart();
    // dispatch(fetchCartItems("62726e3abe5681299166cb87"));
  }, []);
    const [selectedProduct, selectProduct] = useState({});
    const [quantity, setQuantity] = useState(0);

     const updateProductQuantity = () => {
       dispatch(updateProduct(selectedProduct.cartId, +quantity));
       updateCart();
       updateCart();
     };
  return (
    <CartWrapper>
      <div>
        <h1>My Cart</h1>
        <div id="cart-details">
          <ProductSection
            products={cartItems}
            updateCart={updateCart}
            selectProduct={selectProduct}
            setQuantity={setQuantity}
            updateProductQuantity={updateProductQuantity}
            className="product-section"
          />
          <PriceSection
           
            updateProductQuantity={updateProductQuantity}
            total={cartItems.reduce(
              (acc, cur) => acc + cur.price * cur.quantity,
              0
            )}
            className="price-section"
          />
        </div>
      </div>
    </CartWrapper>
  );
}

export default Cart;
