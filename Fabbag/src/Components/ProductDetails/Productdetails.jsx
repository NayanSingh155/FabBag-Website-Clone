
import { useEffect, useState } from "react";
import css from "./Productdetails.css";
import Carosel from "../Carosel/Carosel"
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from "../../Redux/cart/actions";

export const Productdetails=()=>{
const [counter,setCounter]=useState(1);
const [singleproduct , setsingleproduct] = useState({})
const [url , seturl] = useState("")



useEffect(()=>{
    const ser = localStorage.getItem("searched");
    seturl(`https://cryptic-ocean-94076.herokuapp.com/mainproduct?category=${ser}`)
},[])
useEffect(()=>{
    const id = JSON.parse(localStorage.getItem("id"));
     async function getItem (){
     const data = await fetch(`https://cryptic-ocean-94076.herokuapp.com/mainproduct/${id}`);
     const res = await data.json();
     setsingleproduct(res)
 }
    getItem()
},[])

const userId = useSelector(store => store.userId.userId);
const dispatch = useDispatch();

return (
  <div>
    <div className="main">
      <div>
        <img src={singleproduct.image} alt="" />
        <img
          style={{
            height: "100px",
            width: "130px",
            opacity: "..6",
            marginLeft: "20px",
            marginTop: "50px",
          }}
          src={singleproduct.image}
        />
      </div>
      <div>
        <p>Home</p>
        <p style={{ fontSize: "35px" }}>{singleproduct.title}</p>
        <p style={{ fontSize: "35px", marginTop: "-25px" }}>
          Rs. {singleproduct.price}
        </p>
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
        <button
          style={{
            color: "white",
            height: "60px",
            width: "600px",
            fontWeight: "bolder",
            fontSize: "17px",
            marginTop: "30px",
            backgroundColor: "black",
          }}
          onClick={() => {
            // console.log("add tocart clicked");
            // console.log(counter,singleproduct._id,userId);
            dispatch(addProduct(userId,singleproduct._id,counter));
            alert("Product added to your Cart")

          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
    <div className="des">
      <div>DESCRIPTION</div>
      <div>VIEW PLANS</div>
      <div>RETURNS POLICY</div>
      <div>CUSTOMER REVIEWS</div>
    </div>
    <div
      style={{ marginLeft: "230px", marginRight: "230px", textAlign: "start" }}
    >
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

    <Carosel url={url} />
  </div>
);
}