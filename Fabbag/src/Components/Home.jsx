import { useEffect, useState } from "react"
import  css from "./Home.css"
import { Link } from "react-router-dom";
export const HomePage=()=>{
const imagearr=[            "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-bAG-Reveal-Recovered_b18183de-8b77-490e-b6f9-78adbccd3ebb_2048x.png?v=1651344357",
                           "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Makeup-Reveal_1_2048x.png?v=1641707852",
                            "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Skincare-Reveal--2_2048x.png?v=1641541904",
                            "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Makeup-Reveal_5245d98e-6e1d-43af-a069-7e2aa61175ba_2048x.png?v=1641200608",
                            "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Skincaqre-Reveal_2048x.png?v=1641356448"
                            
                        ];

 const quetoes =[
                           {
                              title: "I love each and every Fab Bag that I receive each month past three years. I am so much in love with fab bags and all the lovely products and cute little pouches that I get. I love Fab Bag.",
                              name:"Munira "
                           },{
                           title:"I've been a regular Fab Bag subscriber for many years now and I must say that the Fab Bag team comes up with something or the other as a special attraction in the bag every month. As always, thank you Fab Bag for making my day with this bag!!!",
                            name:"Poonam "
                           },{
                            title:"I've been a regular Fab Bag subscriber for many years now and I must say that the Fab Bag team comes up with something or the other as a special attraction in the bag every month. As always, thank you Fab Bag for making my day with this bag!!!",
                             name:"Kanishka Rajput" 
                            },
                            {
                                title:"The products are amazing and I am just in love with the bag! Kudos to you team!",
                                name:"Niranjan"
                            }
                        
                        
                        ];
var arr=["https://scontent.cdninstagram.com/v/t51.2885-15/280078594_1223755911761497_2934819991498115476_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=0gVRDGE1M1sAX8Rfei5&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-NGBZrJzN_LALDg1FurTtAjnWjcs5chOxDfkoI8Xpc3g&oe=6277B5C3",
          "https://scontent.cdninstagram.com/v/t51.2885-15/279690442_531630221670430_7682245722290914391_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=NcQAe4tmzMAAX8D2Zk3&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9pfJHHrYwW-8eaRQ8gXNhV8Fuz066gfp4ssS-ioAA2WA&oe=6278B165",
          "https://scontent.cdninstagram.com/v/t51.2885-15/279754469_728802825086106_2659596606794103187_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=55fF1KiFTu0AX9kYcBK&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_-l4jRHaJUXzNMQbzThreliwi2ZHVY9nr1ryBMRAS8pg&oe=62784142",
           "https://scontent.cdninstagram.com/v/t51.2885-15/279581933_497215932094707_6136128380394766149_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=G_yySAoOyjMAX9NUpms&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-FD4BmhFHoT-TWNSukQxs5AYVuZ0SVAub2YXuAf5AWfw&oe=62790492",
           "https://scontent.cdninstagram.com/v/t51.2885-15/279573265_1216110058925543_4773627696402831653_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=8wyMl3aPvxIAX9Bc5R1&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_aEmltRmDUggvXFeHzsDbuHDRSfr9uXwBK0vPRhzVJhA&oe=62791346",
           "https://scontent.cdninstagram.com/v/t51.2885-15/279510362_1884699461741284_4711010573398953350_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=FgztuBVQ2vMAX8ZaD_y&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-2R7ujq-RU_MONgpylPfoKoSkhMfQrBX7YCj8V4HDzlw&oe=6278E66C",
            "https://scontent.cdninstagram.com/v/t51.2885-15/279622440_361224356025159_6042128077747141045_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=SsN3Oy8ULaEAX9ifaKl&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9GKjzPUD9rj93T3SBnj5-8Shde0o5b8ozeGZXiSPTGlA&oe=627905A6",
          "https://scontent.cdninstagram.com/v/t51.2885-15/279449441_396753299023443_3829925822050455762_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=YiDFZ8OUXWIAX_6Th4N&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8yj_CUzLb0mnIe_zqVFhCkhWeAfoD4uBadsbj5d6L9kw&oe=6277C785"      ]                         

var foot=[
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Tru_hair_logo_160x160.png?v=1625063080",
         "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/sugar_1_160x160.jpg?v=1548837170",
         "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/brick-new-york-with-symbol-white_46f7f93d-9ac3-4a6b-8827-7341564c001c_160x160.png?v=1599126230",
          "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/WOC_Beauty_Logo_160x160.jpg?v=1602225835",
         "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/6256280-43d286588b4beafb0e4a423acf72a620-medium_jpg_5e3480ef-0e7a-4aea-88d0-c48379ad9837_160x160.jpg?v=1599290601",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/palmers-logo_33a73358-5f3d-4cd4-ac8c-ecf89a2c72b2_160x160.jpg?v=1597725541",
         "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/LLW1vAyf_400x400_36a490d2-defb-4c90-898d-2af5215e8433_160x160.jpg?v=1578730298",
         "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/WOC_Beauty_Logo_160x160.jpg?v=1602225835",
         "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/6256280-43d286588b4beafb0e4a423acf72a620-medium_jpg_5e3480ef-0e7a-4aea-88d0-c48379ad9837_160x160.jpg?v=1599290601" ]

const [quto,setQuto]=useState({});
const [image,setImage]=useState("https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-bAG-Reveal-Recovered_b18183de-8b77-490e-b6f9-78adbccd3ebb_2048x.png?v=1651344357");
const [bagData,setBag]=useState([]);
const [priBag,setPrebag]=useState([]);
const [first ,setfir]=useState("");
const [sec ,setsec]=useState("");
const [thir ,setthir]=useState("");
const [fort ,setfort]=useState("");


useEffect(()=>{
    setsideshow();
    getBagdata();
    getpridata();
    setsideshow2();
    setsideshow3();
},[]);

   function setsideshow(){
    var i=0;
    setInterval(() => {
        if(i === imagearr.length){
            i=0;
        }
       setImage(imagearr[i]);
        i++;
    }, 10000);
   }   
   function setsideshow2(){
    var i=0;
    setInterval(() => {
        if(i === quetoes.length){
            i=0;
        }
       setQuto(quetoes[i]);
        i++;
    }, 3000);
   }  
   


function setsideshow3(){

var i=0;
setInterval(() => {
    if(i==foot.length-1){
        i=0;
    }

setfir(foot[i]);
    i++
setsec(foot[i])
i++;
setthir(foot[i]);
i++;
setfort(foot[i]);
i++;

}, 3000);

}

   async function getBagdata(){
       const data=await fetch(`https://cryptic-ocean-94076.herokuapp.com/products?page=1&pagesize=5`).then(d=>d.json());
       setBag(data);
       
   }
   async function getpridata(){
    const data=await fetch(`https://cryptic-ocean-94076.herokuapp.com/previous?page=1&pagesize=5`).then(d=>d.json());
    setPrebag(data);
}


    return (<div style={{textAlign:"center"}}>
          <div className="sideshow" >
         <Link to="/homedetail"> <img style={{height:"100%",width:"100%"}} src={image}/></Link>  
          </div>
                 <p className="text" >WHAT'S IN THE BAG</p>
                 <div className="bottomLine"></div>



<div  className="bagdiv" >
   {bagData.map((e)=>(
       <div style={{border:"2px solid goldenrod",borderRadius:"10%",marginLeft:"10px"}} key={e.title}>
        <Link to="/homedetail"> <img style={{width:"100%",height:"100%",borderRadius:"10%"}} src={e.image}/></Link>
        <p>{e.title}</p>
       </div>
      
   ))}
   </div>

   <p  className="text">SUBSCRIPTION</p>
   <div className="bottomLine"></div>
   <div className="list">

<div >
<div>
    <h3>1 MONTH</h3>
     <p>SUBSCRIPTION </p>
</div>
<div>
    <h3>Rs. 599.00</h3>
    <p>/ per month </p>
</div>
<div>
<h4 style={{color:"rgb(231, 193, 96)"}}>ONE TIME PAYMENT</h4>
<h3>Rs. 599.00</h3>
</div>
<div  style={{height:"140px"}}></div>
<div style={{backgroundColor:"rgb(231, 193, 96)"}}>
< h4 className="mycart" style={{cursor:"pointer"}} > ADD TO CART</h4>
</div>
</div>

<div>
<div>
    <h3>3 MONTH</h3>
     <p>SUBSCRIPTION </p>
</div>
<div>
    <h3>Rs. 533.00</h3>
    <p>/ per month </p>
</div>
<div>
<h4 style={{color:"rgb(231, 193, 96)"}}>ONE TIME PAYMENT (11% OFF)</h4>
<h3> Rs. 1,599.00 </h3>
</div>
<div  style={{height:"140px"}}></div>
<div style={{backgroundColor:"rgb(231, 193, 96)",marginBottom:"20px"}}>
<h4 className="mycart" style={{cursor:"pointer"}}>ADD TO CART</h4>
</div>
</div>
   </div>
   <p className="text">PRIVIOUS BAGS</p>
   <div className="bottomLine"></div>
   <div className="privious">
  {priBag.map((e)=>(
       
         <div key={e.title} >
             <img style={{height:"165px",width:"255px"}} src={e.image}/>
             {e.title}
             <p style={{fontSize:"18px",color:"grey",marginTop:"-1%" ,textAlign:"start",marginLeft:"30px"}}><i>From </i>Rs.{e.price}</p>
             </div>


       
  ))} </div>

  <div className="Quetoes">
  
      <p  className="text">TESTIMONIALS</p>
   <div className="bottomLine" ></div>
 
   <h1 style={{fontSize:"100px"}}>“ </h1>
   
   <p key={quto.name} style={{marginTop:"-50px",fontSize:"18px",letterSpacing:".5px"}}>{quto.title}</p>
   <h4>- {quto.name}</h4>
  </div>
  <div className="text" style={{}}>#TRENDINGNOW AT THE GOSSIP CORNER</div>
<div className="Insta">
    
    {arr.map((e)=>(
        <div  key ={e}><img style={{height:"100%",width:"100%"}} src={e}/></div>
    ))}
</div>
 <div className="foot">
   <div>
<img src={first} alt="" />
<img src={sec} alt="" />
<img src={thir} alt="" />
<img src={fort} alt="" />
   </div>
 </div>
    </div>)
}



