
// import navbar from "../component/navbar.js";
// document.getElementById("navbar").innerHTML = navbar();

import footer from '../component/footer.js'
document.body.innerHTML=footer();


let x;
let slide1 = document.getElementById("slide1")
let slide1_img = ['https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-bAG-Reveal_2cdfb5d0-eee9-4bcc-abf9-957fa44d0dfa_2048x.png',
    'https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal--3.png?v=1641707966',
]

let img = document.createElement("img");
img.className = "images_slid1";
let anchore = document.createElement("a");
anchore.href = '../subscribeNow/subscribeNow.html';
anchore.append(img)
slide1.append(anchore);
// console.log(slide1)

let i = 0;
let slide_show1 = () => {
    x = setInterval(function () {
        if (i == slide1_img.length) {
            i = 0
        }
        if (i < 0) {
            i = slide1_img.length - 1;
        }
        img.src = slide1_img[i];
        // console.log(i)
        i++
    }, 2000)
}
slide_show1()

function plusSlides(position) {
    clearInterval(x)
    i += position
    if (i == slide1_img.length) {
        i = 0
    }
    if (i < 0) {
        i = (slide1_img.length - 1)
    }
    img.src = slide1_img[i];
    slide_show1()
}




//   import navbar from '../component/navbar.js';

//   let header = document.getElementById("header");
//      header.innerHTML = navbar();

const search = document.getElementById('search').addEventListener('click', search_pop_come)
function search_pop_come() {
    let search = document.getElementById("search_pop_up");
    let navbar = document.getElementById("navbar");
    search.style.display = "block";
    navbar.style.display = "none";
}

const cancle = document.querySelector('.cancle').addEventListener('click', bring_navbar_again)
function bring_navbar_again() {
    let search = document.getElementById("search_pop_up");
    let navbar = document.getElementById("navbar");
    search.style.display = "none";
    navbar.style.display = "flex";
}

let profile = document.getElementById("profile").addEventListener('mouseover', bring_list)
function bring_list() {
    let options = document.querySelector(".options");
    options.style.display = "inline-block";
}

document.getElementById("profile").addEventListener('mouseout', go_list)
function go_list() {
    let options = document.querySelector(".options");
    options.style.display = "none";
}

// let next = document.getElementsByClassName('slides').addEventListener()

//making logo_Img clickable

















function addToCart(amount) {
    if (localStorage.getItem("cart")) {
        let local = JSON.parse(localStorage.getItem("cart"))
        console.log(local[0].quantity, amount == 599);
        if (amount == 599) {
            local[0].quantity++
        } else {
            local[1].quantity++
        }
        console.log(local);
        localStorage.setItem("cart", JSON.stringify(local))
    } else {
        let arr = [];
        let obj1 = {
            subscription: "1",
            quantity: 0,
            price: 599,
            img: "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-1_compact.png",
            title: "The Empow-HER March Fab Bag 1 Month"
        }
        let obj2 = {
            subscription: "3",
            quantity: 0,
            price: 1599,
            img: "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-1_compact.png",
            title: "The Empow-HER March Fab Bag 3 Months"
        }
        if (amount === 599) {
            obj1.quantity++
        } else {
            obj2.quantity++
        }
        arr.push(obj1)
        arr.push(obj2)
        localStorage.setItem("cart", JSON.stringify(arr))
    }
}

    function addToCart(amount) {
      if (localStorage.getItem("cart")) {
        let local = JSON.parse(localStorage.getItem("cart"))
    console.log(local[0].quantity ,amount == 599);
    if (amount == 599) {
        local[0].quantity++
    }else{
        local[1].quantity++
    }
    console.log(local);
    localStorage.setItem("cart",JSON.stringify(local))
      } else{
        let arr =  [];
    let obj1 = {
        subscription: "1",
    quantity: 0,
    price: 599,
    img: "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-1_compact.png",
    title: "The Empow-HER March Fab Bag 1 Month"
        }
    let obj2 = {
        subscription: "3",
    quantity: 0,
    price: 1599,
    img: "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-1_compact.png",
    title: "The Empow-HER March Fab Bag 3 Months"
        }
    if (amount === 599) {
        obj1.quantity++
    }else{
        obj2.quantity++
    }
    arr.push(obj1)
    arr.push(obj2)
    localStorage.setItem("cart",JSON.stringify(arr))
      }
    }



// -------------Testimonial---------






var count5=1;
function nxtbut1()
{
    if(count5==8)
    {
        count5=1;
    }
    else
    {
        count5++;
    }
    display5()
}

function prvbut1()
{
    if(count5==1)
    {
        count5=8;
    }
    else
    {
        count5--;
    }
    display5()
}

function display5()
{
    var val=document.querySelectorAll("#allimg1 > div");
    console.log(val.length)

    for(var i=0;i<8;i++)
    {
        if(i+1==count5)
        {
            val[i].style.display="block";
            console.log(val[i])
        }
        else
        {
            val[i].style.display="none";
        }
    }
}

setInterval(nxtbut1,3000)



