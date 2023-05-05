import {
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItemText,
  Typography,
} from "@mui/material";

export default function Menu() {
  const itemData = [
    {
      img: "https://i.imgur.com/MvL9tf5.jpeg",
      title: "Holiday Blended",
    },
    {
      img: "https://i.imgur.com/tzkZhAQ.jpeg",
      title: "Hot Coffee Held",
    },
    {
      img: "https://i.imgur.com/xRbB5JF.jpeg",
      title: "Bottled Heart",
    },
    {
      img: "https://i.imgur.com/3is0s0Y.jpeg",
      title: "Bottled Beverages",
    },
  ];

  return (
    <Grid container spacing={6}>
      <Grid item sm>
        <ImageList variant="quilted" cols={2} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: "25px" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item sm container columnSpacing={6}>
        <Grid item xs={4} sm={4}>
          <List dense>
            <ListItemText>
              <Typography variant="h6">Coffee</Typography>
            </ListItemText>
            <ListItemText>Drip</ListItemText>
            <ListItemText>Pour Over</ListItemText>
            <ListItemText>Cold Brew</ListItemText>
            <ListItemText>Espresso</ListItemText>
            <ListItemText>Latte</ListItemText>
            <ListItemText>Americano</ListItemText>
            <ListItemText>Cortado</ListItemText>
            <ListItemText>Cafe Mocha</ListItemText>
          </List>
        </Grid>
        <Grid item xs={4} sm={4}>
          <List dense>
            <ListItemText>
              <Typography variant="h6">Blended</Typography>
            </ListItemText>
            <ListItemText>Hot Chocolate</ListItemText>
            <ListItemText>Hot Vanilla</ListItemText>
            <ListItemText>Hot Caramel</ListItemText>
            <ListItemText>Bottled Spring Water</ListItemText>
          </List>
        </Grid>
        <Grid item xs={4} sm={4}>
          <List dense>
            <ListItemText>
              <Typography variant="h6">Specialties</Typography>
            </ListItemText>
            <ListItemText>Shaken Cafe de Olla</ListItemText>
            <ListItemText>Dulce de Leche Latte</ListItemText>
            <ListItemText>Spanish Latte</ListItemText>
            {/* <ListItemText>Horchata</ListItemText>
            <ListItemText>Horchata & Cold Brew</ListItemText> */}
          </List>
        </Grid>
        <Grid item xs={4} sm={4}>
          <List dense>
            <ListItemText>
              <Typography variant="h6">Tea</Typography>
            </ListItemText>
            <ListItemText>Raspberry Hibiscus</ListItemText>
            <ListItemText>Very Berry</ListItemText>
            <ListItemText>Chai</ListItemText>
            <ListItemText>Green (Matcha)</ListItemText>
          </List>
        </Grid>
        <Grid item xs={4} sm={4}>
          <List dense>
            <ListItemText>
              <Typography variant="h6">Lemonade</Typography>
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
        <Grid item xs={4} sm={4}>
          <List dense>
            <ListItemText>
              <Typography variant="h6">Other Drinks</Typography>
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
