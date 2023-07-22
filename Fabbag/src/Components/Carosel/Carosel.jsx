import React from "react";
import Slider from "react-slick";
import "./carosel.css";
import axios from "axios";
import { useEffect, useState } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function Carosel(url) {
  const [Product, setProduct] = useState([]);
  // let content = null;

  useEffect(() => {
    axios.get(url.url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
  };
  return (
    <>
      <div className="Maindiv">
        <Slider {...settings}>
          {Product.map((data) => (
            <div id="Imgdiv" key={data.id}>
              <img
                style={{ width: "150", height: "150px" }}
                src={data.image}
                alt="pro"
              />

              <span className="imgtitle">{data.title}</span>
              <span className="imgtitle">{data.price}</span>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Carosel;