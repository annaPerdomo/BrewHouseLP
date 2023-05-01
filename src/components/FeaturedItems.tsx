import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const itemData = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    src: "https://i.imgur.com/Hbu0d9C.jpg",
  },
  {
    name: "Random Name #2",
    description: "Hello World?",
    src: "https://i.imgur.com/W2DAZgF.jpg",
  },
];

export default function FeaturedItems() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            src="https://i.imgur.com/Hbu0d9C.jpg"
            height="400px"
            width="400px"
          />
        </div>
        <div>
          <img
            src="https://i.imgur.com/W2DAZgF.jpg"
            height="400px"
            width="400px"
          />
        </div>
        <div>
          <img
            src="https://i.imgur.com/W2DAZgF.jpg"
            height="400px"
            width="400px"
          />
        </div>
        <div>
          <img
            src="https://i.imgur.com/W2DAZgF.jpg"
            height="400px"
            width="400px"
          />
        </div>
        <div>
          <img
            src="https://i.imgur.com/W2DAZgF.jpg"
            height="400px"
            width="400px"
          />
        </div>
        <div>
          <img
            src="https://i.imgur.com/W2DAZgF.jpg"
            height="400px"
            width="400px"
          />
        </div>
      </Slider>
    </div>
  );
}
