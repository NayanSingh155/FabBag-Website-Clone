

    function navbar(){
        return `      <div id="search_pop_up">
        <div class="cancle">x</div>
        <p><b>WHAT ARE YOU LOOKING FOR?</b></p>
        <input type="text" id="search_input" placeholder="search product" />
      </div>

      <div id="navbar">
    
        <div class="subscribe">  <a href = "../subscribeNow/subscribeNow.html"><h3>SUBSCRIBE NOW</h3> </a></div>
     
        <div class="logo">
    
          <img
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289"
            alt=""
            id="logo_Img"
          />
        
        </div>
        <div class="search_cart">
          <div id="cart"><i class="fa fa-car"></i></div>
          <div id="profile">
            <i class="fa fa-user"></i>
          </div>
          <div id="wishlist"><i class="fa fa-heart"></i></div>
          <div id="search">
            <i class="fa fa-search"></i>
          </div>
        </div>
      </div>

      <div class="options">
        <ul>
          <li>Languages</li>
          <hr />
          <li>Checkout</li>
          <hr />
          <li>Sign In</li>
          <hr />
          <li>Create An Account</li>
        </ul>
      </div>`
    }
 

    export default navbar;

