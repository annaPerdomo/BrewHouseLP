import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";

import AboutUs from "../src/components/AboutUs";
import Address from "../src/components/Address";
import Copyright from "../src/components/Copyright";
import FeaturedItems from "../src/components/FeaturedItems";
import Hours from "../src/components/Hours";
import Menu from "../src/components/Menu";
import useDeviceSize from "../src/hooks/useDeviceSize";

export default function Home(): React.ReactElement<any> {
  const { width } = useDeviceSize();
  const isMobile = width <= 500;

  return (
    <>
      <Box
        sx={{
          pt: "1.5%",
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

      <Box
        sx={{
          backgroundColor: "secondary.main",
          paddingBottom: "3%",
        }}
      >
        <br />
        <Typography
          variant="h3"
          color="black"
          gutterBottom
          sx={{ textAlign: "center", mb: "2%" }}
        >
          Featured Items
        </Typography>
        <FeaturedItems />
      </Box>

      <Container maxWidth="lg" sx={{ overflow: "hidden" }}>
        <Box
          sx={{
            mb: "1%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", mb: "1%", mt: "2%" }}
          >
            Menu
          </Typography>

          <br />

          <Menu />

          <br />
          <br />
        </Box>
      </Container>

      <Box sx={{ backgroundColor: "secondary.main" }}>
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

        <Address />

        <br />
        <br />

        <Hours />

        <Copyright />
      </Container>
    </>
  );
}
