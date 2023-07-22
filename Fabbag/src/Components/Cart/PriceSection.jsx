import styled from 'styled-components';
import {Link} from "react-router-dom"
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  width: 25%;
  /* max-width: 600px; */
  #total-price {
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    /* border:2px solid black; */
    margin-top:-12px;
  }
  .cart-btn {
    height: 40px;
    margin: 10px 0px;
    border: none;
    transition: 1s;
    border-radius: 4px;
    text-transform: uppercase;
    color: white;
    width: 100%;
  }
  #update-cart-btn {
    background-color: black;
    &:hover {
      background-color: #e5b95f;
    }
  }

  #checkout-btn{
      background-color: #e5b95f;
      &:hover{
          background-color: black;
      }
  }
   @media (max-width: 767.98px) {
     width: 95%;

     max-width: unset;
     }
`;

function PriceSection({total,updateProductQuantity}){

    return <SectionWrapper>
        <div id='total-price'>
            <p>TOTAL PRICE :</p>
            <p>Rs {total}</p>
        </div>
        <button id="update-cart-btn" className='cart-btn' onClick={updateProductQuantity}>UPDATE CART</button>
        <Link to='/checkout'><button id='checkout-btn' className='cart-btn'>CHECK OUT</button></Link>
    </SectionWrapper>

}

export default PriceSection;