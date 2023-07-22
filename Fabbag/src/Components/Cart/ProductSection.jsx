import styled from "styled-components";
import {  removeProduct } from "../../Redux/cart/actions";
import { useDispatch } from "react-redux";


const SectionWrapper = styled.div`
  th {
    text-align: left;
    text-transform: uppercase;
  }
  th,
  td {
    padding: 3px;
  }
  .product {
    display: flex;
    img {
      width: 80px;
      margin-right: 5px;
    }
  }
  .product-name {
    text-align: left;
  }
  .product-qty {
    /* display: block; */
    input {
      height: 20px;
      padding: 5px;
      width: 50px;
      text-align: center;

      &:focus {
        border: 1px solid orange;
        outline: none;
      }
    }
  }
  .product-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  .small-screen {
    display: none;
    background-color: white;
  }
  .btn {
    border: none;
    background-color: white;
  }
  .orange {
    color: #e5b95f;
  }
  @media (max-width: 767.98px) {
    .small-screen {
      display: block;
    }
    .large-screen {
      display: none;
    }
    .product-details {
      display: block;
    }
  }
`;

function ProductSection({ products, updateCart,updateProductQuantity,setQuantity,selectProduct }) {
  const handleChange = (e,product) => {
  
    setQuantity(e.target.value);
  };

  const handleKeyPress = (e) => {
  

    if (e.key === "Enter") {
  
      updateProductQuantity();
  
    }
  };

  const dispatch = useDispatch();

  return (
    <SectionWrapper>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th className="large-screen">Price</th>
            <th className="large-screen"></th>
          </tr>
          {products.map((product, index) => (
            <tr>
              <td className="product">
                <div>
                  <img src={product.image} alt="" />
                </div>
                <div className="product-details">
                  <p>{product.title}</p>
                  <p className="small-screen">Rs {product.price}</p>
                  <button
                    className="small-screen btn orange"
                    onClick={() => {
                      // console.log("clicked");
                      dispatch(removeProduct(product.cartId));
                      // updateProductQuantity();
                      updateCart();
                      updateCart();
                    }}
                  >
                    Remove
                  </button>
                </div>
              </td>

              <td className="product-qty">
                <input
                  type="number"
                  name="qty"
                  id={product.cartId}
                  onFocus={() => selectProduct(product)}
                  onBlur ={updateProductQuantity}
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                  placeholder={product.quantity}
                  // value={product.quantity}
                />
              </td>
              <td className="large-screen">Rs {product.price}</td>
              <td className="large-screen">
                <button
                  className="btn"
                  onClick={() => {
                    // console.log("clicked");
                    dispatch(removeProduct(product.cartId));
                    // updateProductQuantity();
                    updateCart();
                    updateCart();
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionWrapper>
  );
}

export default ProductSection;
