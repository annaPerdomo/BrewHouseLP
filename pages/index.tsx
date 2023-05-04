import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import * as React from "react";

import AboutUs from "../src/components/AboutUs";
import Copyright from "../src/components/Copyright";
import FeaturedItems from "../src/components/FeaturedItems";
import Menu from "../src/components/Menu";
import useDeviceSize from "../src/hooks/useDeviceSize";

export default function Home(): React.ReactElement<any> {
  const { width } = useDeviceSize();
  const isMobile = width <= 500;

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
        }}
      >
        <img
          src="https://i.imgur.com/9pJORYw.png"
          alt="me"
          width={isMobile ? 300 : 1000}
          height={isMobile ? 150 : 300}
        />
      </Box>

      <br />

      <Typography
        variant="h3"
        gutterBottom
        sx={{ textAlign: "center", marginBottom: "1%" }}
      >
        Menu
      </Typography>

      <Box
        sx={{
          backgroundColor: "tan",
        }}
      >
        <br />
        <Typography
          variant="h4"
          color="black"
          gutterBottom
          sx={{ textAlign: "center", marginBottom: "1%" }}
        >
          Featured Items
        </Typography>
        <FeaturedItems />
      </Box>
      <Container maxWidth="lg" sx={{ overflow: "hidden" }}>
        <Box
          sx={{
            mb: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <br />

          <Menu />

          <br />
          <br />
        </Box>
      </Container>
      <Box
        sx={{
          // mb: 4,
          // justifyContent: "center",
          // alignItems: "center",
          backgroundColor: "tan",
        }}
      >
        <br />
        <AboutUs />
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          overflow: "hidden",
          mb: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <br />
        <br />

        <Typography variant="h5">Address</Typography>

        <Typography>111 S 1st St</Typography>
        <Typography>La Puente, CA 91744</Typography>

        <br />
        <br />

        <Typography variant="h5">Hours</Typography>

        <List dense sx={{ pb: 4 }}>
          <ListItem>
            <Grid alignItems="center" container justifyContent="space-between">
              <Grid item>
                <Typography
                  sx={{ textTransform: "capitalize", width: "200px" }}
                >
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
                <Typography
                  sx={{ textTransform: "capitalize", width: "200px" }}
                >
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
                <Typography
                  sx={{ textTransform: "capitalize", width: "200px" }}
                >
                  Sunday
                </Typography>
              </Grid>

              <Grid item>
                <Typography>8:00am - 6:00pm</Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
        <Copyright />
      </Container>
    </>
  );
}
