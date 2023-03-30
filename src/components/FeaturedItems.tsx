import { Card, Grid, Paper } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import useDeviceSize from "../hooks/useDeviceSize";

export default function FeaturedItems() {
  const itemData = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      src: "https://i.imgur.com/YwzdWaW.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World?",
      src: "https://i.imgur.com/xRbB5JF.jpeg",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
      src: "https://i.imgur.com/3is0s0Y.jpeg",
    },
  ];

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto" }}>
      <Carousel autoPlay={false} indicators={false} navButtonsAlwaysVisible>
        {itemData.map((item, i) => {
          return <CarouselItems key={i} item={item} />;
        })}
      </Carousel>
      <br />
    </div>
  );
}

function CarouselItems(props: any) {
  const { width } = useDeviceSize();
  const isMobile = width <= 500;

  return (
    <Grid
      container
      columns={16}
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item sm={2} lg={4} sx={{ display: isMobile ? "none" : "block" }}>
        <Image
          src={props.item.src}
          alt={props.item.name}
          width="375"
          height="375"
        />
      </Grid>
      <Grid item xs={16} sm={4} lg={6}>
        <Card
          sx={{
            borderRadius: "5%",
            textAlign: "center",
          }}
        >
          <Image
            src={props.item.src}
            alt={props.item.name}
            width="375"
            height="375"
          />
          <p>{props.item.name}</p>
          <p>{props.item.description}</p>
        </Card>
      </Grid>
      <Grid item sm={2} lg={4} sx={{ display: isMobile ? "none" : "block" }}>
        <Image
          src={props.item.src}
          alt={props.item.name}
          width="375"
          height="375"
        />
      </Grid>
    </Grid>
  );
}
