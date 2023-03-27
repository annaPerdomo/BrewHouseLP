import {
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItemText,
} from "@mui/material";
import { wrap } from "module";

export default function Menu() {
  const itemData = [
    {
      img: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
      title: "Image 2",
    },
    {
      img: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Image 1",
    },
    {
      img: "https://www.sustainablecooks.com/wp-content/uploads/2019/04/blended-iced-coffee-9-540x540.jpg",
      title: "Image 3",
    },
  ];

  return (
    <Grid container spacing={4}>
      <Grid item sm>
        <ImageList variant="masonry" cols={2} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={12} sm container direction="column" columnSpacing={0.5}>
        <Grid item xs>
          <List dense>
            <ListItemText>
              <h3>Coffee</h3>
            </ListItemText>
            <ListItemText>Drip</ListItemText>
            <ListItemText secondary="⮑ Medium: Columbia | Dark: Brazil">
              Pour Over
            </ListItemText>
            <ListItemText>Cold Brew</ListItemText>
            <ListItemText>Espresso</ListItemText>
            <ListItemText>Latte</ListItemText>
            <ListItemText>Americano</ListItemText>
            <ListItemText>Cortado</ListItemText>
            <ListItemText>Cafe Mocha</ListItemText>
          </List>
        </Grid>
        <Grid item xs={3}>
          <List dense>
            <ListItemText>
              <h3>Tea</h3>
            </ListItemText>
            <ListItemText>Raspberry Hibiscus</ListItemText>
            <ListItemText>Very Berry</ListItemText>
            <ListItemText>Chai</ListItemText>
            <ListItemText>Green (Matcha)</ListItemText>
          </List>
        </Grid>
        <Grid item xs={3}>
          <List dense>
            <ListItemText>
              <h3>Blended</h3>
            </ListItemText>
            <ListItemText>Hot Chocolate</ListItemText>
            <ListItemText>Hot Vanilla</ListItemText>
            <ListItemText>Hot Caramel</ListItemText>
            <ListItemText>Bottled Spring Water</ListItemText>
          </List>
        </Grid>
        <Grid item xs={3}>
          <List dense>
            <ListItemText>
              <h3>Lemonade</h3>
            </ListItemText>
            <ListItemText>Cucumber</ListItemText>
            <ListItemText>Strawberry</ListItemText>
            <ListItemText>Cherry</ListItemText>
            <ListItemText>Orange</ListItemText>
            <ListItemText>Mango</ListItemText>
            <ListItemText>Peach</ListItemText>
            <ListItemText>Watermelon</ListItemText>
          </List>
        </Grid>
        <Grid item xs={3}>
          <List dense>
            <ListItemText>
              <h3>Specialties</h3>
            </ListItemText>
            <ListItemText>Hot/Cold Shaken Cafe de Olla</ListItemText>
            <ListItemText>Hot/Cold Dulce de Leche Latte</ListItemText>
            <ListItemText>Spanish Latte</ListItemText>
            <ListItemText>Horchata</ListItemText>
            <ListItemText>Horchata & Cold Brew</ListItemText>
          </List>
        </Grid>
        <Grid item xs={3}>
          <List dense>
            <ListItemText>
              <h3>Other Drinks</h3>
            </ListItemText>
            <ListItemText>Hot Chocolate</ListItemText>
            <ListItemText>Hot Vanilla</ListItemText>
            <ListItemText>Hot Caramel</ListItemText>
            <ListItemText>Bottled Spring Water</ListItemText>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
}
