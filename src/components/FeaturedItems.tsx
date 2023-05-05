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
    {
      id: 3,
      name: "Shaken Cafe de Olla",
      img: "https://imgur.com/qpUyiEq.jpg",
      description:
        "A traditional Mexican coffee beverage made by combining spices and coffee. Available hot or iced.",
    },
  ];

  return (
    <div>
      <Splide
        options={{
          arrows: false,
          autoplay: true,
          breakpoints: {
            500: {
              gap: "20%",
              fixedWidth: "350px",
              padding: { left: "10%" },
              perPage: 1,
            },
          },
          cover: true,
          height: "400px",
          fixedWidth: "400px",
          focus: "center",
          gap: "10%",
          interval: 5000,
          padding: { left: "20%", right: "20%" },
          pagination: false,
          perMove: 1,
          perPage: featuredItems.length,
          type: "loop",
        }}
      >
        {featuredItems.map((item) => (
          <SplideSlide className={styles.container} key={item.id}>
            <img className={styles.image} src={item.img} alt={item.name} />
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
