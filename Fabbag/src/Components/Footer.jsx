import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footermain">
      <div className="footer">
        <div className="information">
          <p style={{ color: "black", fontSize: "larger" }}>INFORMATION</p>
          <p
            onClick={() => {
              navigate(`./about`);
            }}
          >
            About Us
          </p>
          <p>Associated</p>
          <p>FAQ</p>
          <p>Collaborative with Fab Bag</p>
         <Link to="/contactus"> <p>Contact Us</p></Link>
          <p>Returns & Refunds</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="information">
          <p style={{ color: "black", fontSize: "larger", cursor: "default" }}>
            CUSTOMER CARE
          </p>
          <p style={{ marginBottom: "-15px" }}>Call : 022-6805-6010 </p>
          <p>(Monday to Friday : 9 AM - 7 PM).</p>
          <p>Mail : crew@fabbag.com</p>
        </div>
        <div className="information">
          <p style={{ color: "black", fontSize: "larger" }}>NEWSLETTER</p>
          <p>Signup for the latest offers, updates and news</p>
          <div className="subscribediv">
            <input
              type="text"
              className="subscribe_input"
              placeholder="Your Email Address"
            />
            <button className="subscribe_btn">SUBSCRIBE</button>
            </div>
            <div>
            <p style={{ color: "grey" }}>Don’t worry we don’t spam</p>
          
          </div>
        </div>
      </div>
      <div>
        {/* <div className="socialmedia"> */}
        <div style={{ display: "flex", marginLeft: "39%" }}>
          <div id="socialmediadiv1">
          <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div id="socialmediadiv2">
          <i className="fa-brands fa-twitter"></i>
            </div>
          <div id="socialmediadiv3">
          <i className="fa-brands fa-instagram"></i>
            </div>
            <div id="socialmediadiv4">
            <i className="fa-brands fa-youtube-square"></i>
            </div>
           
        </div>
        <div>
           <p>Copyright © 2021 fabbag.com All rights reserved.</p>
            </div>
      </div>
    </div>
  );
};
