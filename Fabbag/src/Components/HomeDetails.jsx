
import { useState } from "react";
import css from "./homedetail.css";

export const Homedetail=()=>{
const [counter,setCounter]=useState(1);
    
return (
  <div>
    <div className="main">
      <div>
        <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-1.gif?v=1651909062" />
        <img
          style={{
            height: "100px",
            width: "130px",
            opacity: "..6",
            marginLeft: "20px",
            marginTop: "50px",
          }}
          src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-1.gif?v=1651909062"
        />
      </div>
      <div>
        <p>Home</p>
        <p style={{ fontSize: "35px" }}>The AweSummer May Fab Bag</p>
        <p style={{ fontSize: "35px", marginTop: "-25px" }}>Rs. 599.00</p>
        <p style={{ fontSize: "20px", marginTop: "50px" }}>
          Phew, it's getting hot in here! Unveil the midsummer madness with the
          hottest beauty staples inside the...
        </p>
        <h4>Plans</h4>
        <div style={{ display: "flex", gap: "10px" }}>
          <p style={{ backgroundColor: "lightgray" }}>1 MONTH</p>
          <p style={{ backgroundColor: "lightgray" }}> 2 MONTH</p>
        </div>
        <div className="increaser">
          <h1
            onClick={() => {
              if (counter > 1) {
                setCounter(counter - 1);
              }
              return 1;
            }}
          >
            -
          </h1>
          <h1>{counter}</h1>
          <h1
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </h1>
        </div>
        <button className="BUtton">ADD TO CART</button>
      </div>
    </div>
    <div className="des">
      <div>DESCRIPTION</div>
      <div>VIEW PLANS</div>
      <div>RETURNS POLICY</div>
      <div>CUSTOMER REVIEWS</div>
    </div>
    <div className="footerfirst">
      <p>
        Phew, it's getting hot in here! Unveil the midsummer madness with the
        hottest beauty staples inside the AweSummer May Fab Bag.
      </p>

      <ul>
        Here's what you can expect inside your May Fab Bag:
        <li>SUGAR Own The Light Liquid Highlighter of your choice!*</li>
        <li> SUGAR Smudge Me Not Liquid Lipstick Mini of your choice!*</li>
        <li>Organic Soap</li>
        <li>Bonus*</li>
      </ul>
      <p>
        {" "}
        *Two offers cannot be clubbed. Makeup choice will be available on the
        order confirmation page, on a first-come, first-served basis. Bonus
        product will be customized by the Fab Bag Crew.
      </p>

      <p>
        FAB BAG delivers the best of beauty and makeup products once a month,
        customized just{" "}
      </p>
    </div>
  </div>
);
}