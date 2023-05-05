import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

export default function Hours() {
  return (
    <>
      <Typography variant="h5">Hours</Typography>

      <List dense sx={{ pb: 4 }}>
        <ListItem>
          <Grid alignItems="center" container justifyContent="space-between">
            <Grid item>
              <Typography sx={{ textTransform: "capitalize", width: "200px" }}>
                Monday - Friday
              </Typography>
            </Grid>

            <Grid item>
              <Typography>Closed</Typography>
            </Grid>
          </Grid>
        </ListItem>

        <ListItem>
          <Grid alignItems="center" container justifyContent="space-between">
            <Grid item>
              <Typography sx={{ textTransform: "capitalize", width: "200px" }}>
                Saturday
              </Typography>
            </Grid>

            <Grid item>
              <Typography>8:00am - 6:00pm</Typography>
            </Grid>
          </Grid>
        </ListItem>

        <ListItem>
          <Grid alignItems="center" container justifyContent="space-between">
            <Grid item>
              <Typography sx={{ textTransform: "capitalize", width: "200px" }}>
                Sunday
              </Typography>
            </Grid>

            <Grid item>
              <Typography>8:00am - 6:00pm</Typography>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </>
  );
}
