import { Grid, Paper } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

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
          return (
            <Grid container columns={12} spacing={4} justifyContent="center">
              <Item key={i} item={item} />
              <Item key={i} item={item} />
              <Item key={i} item={item} />
            </Grid>
          );
        })}
      </Carousel>

      <br />
    </div>
  );
}

function Item(props: any) {
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Image
        src={props.item.src}
        alt={props.item.name}
        width="375"
        height="375"
      />
      <p>{props.item.description}</p>
    </Grid>
  );
}
