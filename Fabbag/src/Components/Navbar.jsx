import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState,useEffect} from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCartItems } from "../Redux/cart/actions";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate =  useNavigate();
  const [selected, setSelected] = useState([])
  const [search, setSearch] = useState("")
  const [loged,setLoged] = useState(false);
  const [right, setRight] = useState(false);
  const handleChange = async (e) => {
    const data1 = await fetch(`https://cryptic-ocean-94076.herokuapp.com/mainproduct?category=${e.target.value}`)
    var data2 = await data1.json()
    console.log("data2" ,data2)
    setSelected(data2)
    setSearch(e.target.value)
  }
  console.log("search",search)
  useEffect(() => {
    handleChange()
  }, [])

  const handleproduct=(id) => {

    localStorage.setItem("id",JSON.stringify(id))
    localStorage.setItem("searched",(search))
    navigate("/productsdetails");
  
  }
  const userId = useSelector(store => store.userId.userId);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCartItems(userId));

  },[]);
  const cartItems = useSelector(store => store.cart) || [];
  // console.log(cartItems);
  return (
    <div className="nav">
      <div className="navbar">
        <div>
          <a className="" href="" target="_self">
            <Link to="/productsdetails"><h2 className="lang2">SUBSCRIBE NOW</h2></Link>
          </a>
        </div>
        <div>
        <Link to="/"> <img
            className="titleimage"
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289"
            alt=""
          /></Link>
        </div>
        <div className="navbar_icon">
          <SearchIcon
            onClick={() => {
              setOpen(!open);
            }}
            className="goldenbutton"
          />
         <Link to="/cart"><FavoriteBorderIcon className="goldenbutton" /></Link>
         <AccountCircleOutlinedIcon className="goldenbutton1" onMouseOver={() => {
            setLoged(!loged)
            console.log(loged)
          }}/>
         {loged === true ?
          <div className="accountLogin" onMouseLeave={()=>{setLoged(!loged)}}>
          <div className="accountfirst">
          <Link to="/cart"> <p style={{color:"black"}}>Cart</p></Link>
          </div>
          <Link to="/checkout"> <div style={{marginLeft:"20px",color:"black",marginTop:"-20px"}}><p>Checkout</p></div></Link>
          <Link to="/login">  <div style={{marginLeft:"20px",color:"black"}}><p>Sign In</p></div></Link>
          <Link to="/signup"> <div style={{marginLeft:"20px",color:"black"}}><p>Create An Account</p></div></Link>
        </div>: null}
         <ShoppingCartOutlinedIcon className="goldenbutton"  onClick={() => {
              setRight(!right);
            }} />
        </div>
      </div>
      <div className="hiddendiv">
        {open === true ? (
          <div className="serchdiv">
            <span
              id="hidebtn"
              onClick={() => {
                setOpen(!open);
              }}
            >
              &#9587;
            </span>
            <p >WHAT ARE YOU LOOKING FOR?</p>
            <div className="inputdiv">
              <input type="text" id="textinput" placeholder="Search Products" onChange={handleChange}/>
              <SearchIcon id="btninput" />
              <div className="searchbox">
              {selected.map((e)=>{
                  console.log(e)
            return <div className="searchelement" onClick={()=>{handleproduct(e._id)}}>
              <div className="searchimagediv">
              <img src={e.image} style={{width:"100%",height:"100%"}}/>
              </div>
              <div className="searchtitlediv" >{e.title}</div>
              <div className="searchpricediv">Price: {e.price} Rs</div>
            </div>
              })
           }</div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="hiddendiv">
        {right === true ? (
          <div className="serchdiv1">
            <span
              id="hidebtn1"
              onClick={() => {
                setRight(!right);
              }}
            >
              &#9587;
            </span>
            <div className="carttop1">
            <h3>MY CART</h3>
            </div> 
            {cartItems.length === 0 ? (
              "No items in cart"
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "85vh",
                }}
              >
                <div className="cartitems">
                  {cartItems.map((item) => (
                    <div style={{ display: "flex" }}>
                      <div>
                        <img
                          src={item.image}
                          alt=""
                          style={{ width: "70px" }}
                        />
                      </div>
                      <div style={{ fontSize: "14px" }}>
                        <p>{item.title}</p>
                        <p>
                          {" "}
                          <span style={{ color: "grey" }}>
                          Qty :{" "}
                            {item.quantity}
                          </span>{" "}
                          Rs : {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="total">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h2>Total : </h2>
                      <h2 style={{ color: "#e5b95f" }}>
                        Rs.{" "}
                        {cartItems.reduce(
                          (acc, cur) => acc + cur.price * cur.quantity,
                          0
                        )}
                      </h2>
                    </div>
                    <Link to="/cart" className="link-btn cart-btn">
                      VIEW CART
                    </Link>
                    <Link to="/checkout" className="link-btn checkout-btn">
                      CHECKOUT
                    </Link>
                  </div>
                </div>
              </div>
            )} 
          </div>
          
        ) : null}
      </div>
    </div>
  );
};

