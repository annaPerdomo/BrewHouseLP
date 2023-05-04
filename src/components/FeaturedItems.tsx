import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

export default function FeaturedItems() {
  return (
    <div>
      <Splide
        aria-label="My Favorite Images"
        options={{
          arrows: false,
          focus: "center",
          perMove: 1,
          perPage: 3,
          padding: { left: "9%" },
          pagination: false,
          type: "loop",
          breakpoints: {
            500: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
          <img
            src="https://i.imgur.com/Hbu0d9C.jpg"
            height="400px"
            width="400px"
            alt="Image 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://i.imgur.com/W2DAZgF.jpg"
            height="400px"
            width="400px"
            alt="Image 2"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}
