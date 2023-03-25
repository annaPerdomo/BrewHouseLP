import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" component="h1">
          BREW HOUSE
        </Typography>

        <Typography variant="h5" gutterBottom>
          La Puente
        </Typography>
        <br />
        <Typography variant="h3" gutterBottom>
          Menu
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6} md={6} sx={{ height: "100%"}}>
            Coffee        
            <List dense>
              <ListItemText>Drip</ListItemText>
              <ListItemText secondary="⮑ Medium: Columbia | Dark: Brazil">Pour Over</ListItemText>
              <ListItemText>Cold Brew</ListItemText>
              <ListItemText>Espresso</ListItemText>
              <ListItemText>Latte</ListItemText>
              <ListItemText>Americano</ListItemText>
              <ListItemText>Cortado</ListItemText>
              <ListItemText>Cafe Mocha</ListItemText>          
            </List>
          </Grid>
          <Grid item xs={6} md={6}>
            Tea        
            <List dense>
              <ListItemText>Raspberry Hibiscus</ListItemText>
              <ListItemText>Very Berry</ListItemText>
              <ListItemText>Chai</ListItemText>
              <ListItemText>Green (Matcha)</ListItemText>          
            </List>
          </Grid>
          <Grid item xs={6} md={6}>
            Other Drinks        
            <List dense>
              <ListItemText>Hot Chocolate</ListItemText>
              <ListItemText>Hot Vanilla</ListItemText>
              <ListItemText>Hot Caramel</ListItemText>
              <ListItemText>Bottled Spring Water</ListItemText>          
            </List>
          </Grid>
        </Grid>

        <Copyright />
      </Box>
    </Container>
  );
}
