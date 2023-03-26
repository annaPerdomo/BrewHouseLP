import { Grid, List, ListItemText } from "@mui/material";

export default function Menu() {
    return (
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
    )
};