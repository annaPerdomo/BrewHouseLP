import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid } from "@mui/material";

export default function FeaturedItems() {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => {
        return (
          <div>
            <Item key={i} item={item} />
          </div>
        );
      })}
    </Carousel>
  );
}

function Item(props: any) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
