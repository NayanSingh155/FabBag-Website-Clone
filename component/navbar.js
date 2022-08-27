

function navbar() {
  return `      <div id="search_pop_up">
        <div class="cancle">x</div>
        <p><b>WHAT ARE YOU LOOKING FOR?</b></p>
        <input type="text" id="search" placeholder="search product" />
      </div>

      <div id="navbar">
    
        <div class="subscribe">  <a href = "../subscribeNow/subscribeNow.html"><h2>SUBSCRIBE NOW</h2> </a></div>
     
        <div class="logo">
    
          <img
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO-Printing1_6350cdb4-8c03-49a8-bd2e-c8df50c83b37_2048x.png?v=1660282958"
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

