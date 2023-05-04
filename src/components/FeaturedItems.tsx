import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import styles from "../styles/FeaturedItems.module.css";

import "@splidejs/react-splide/css/core";

export default function FeaturedItems() {
  const featuredItems = [
    {
      id: 1,
      name: "Rose & Lavender Lemonades",
      img: "https://i.imgur.com/Hbu0d9C.jpg",
      description:
        "Lavender syrup or rose syrup mixed in with our delicious lemonade base.",
    },
    {
      id: 2,
      name: "Tres Leches & Cold Brew",
      img: "https://i.imgur.com/W2DAZgF.jpg",
      description:
        "Sweetened Condensed, Evaporated & Whole Milks mixed with cold brew. If in latte form, it's the three milk mixture along with a double shot of espresso.",
    },
  ];

  return (
    <div>
      <Splide
        options={{
          arrows: false,
          breakpoints: {
            500: {
              perPage: 1,
            },
          },
          gap: "10%",
          focus: "center",
          fixedWidth: "400px",
          padding: { left: "20%", right: "20%" },
          pagination: false,
          perMove: 1,
          perPage: featuredItems.length,
          type: "loop",
        }}
      >
        {featuredItems.map((item) => (
          <SplideSlide className={styles.container}>
            <img
              className={styles.image}
              src={item.img}
              alt={item.name}
              height="400px"
              width="400px"
            />
            <div className={styles.description}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
