import { Typography } from "@mui/material";
import Box from "@mui/system/Box";

import useDeviceSize from "../hooks/useDeviceSize";

export default function AboutUs() {
  const { width } = useDeviceSize();
  const isMobile = width <= 500;

  return (
    <div>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ color: "common.black", textAlign: "center", marginBottom: "1%" }}
      >
        About Us
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2%",
          flexDirection: isMobile ? "column-reverse" : "row",
        }}
      >
        <div style={{ flex: 2 }}>
          <Typography variant="h5" sx={{ color: "common.black", mb: "2%" }}>
            Creating community through coffee
          </Typography>
          <Typography sx={{ color: "common.black" }}>
            The Brew House is a coffee shop in Old Town La Puente serving
            coffee, tea, lemonade and blended beverages since May 2022.
          </Typography>
          <Typography sx={{ color: "common.black" }}>
            Follow us on Instagram:
            <a
              href="https://www.instagram.com/thebrewhouselp/"
              style={{
                verticalAlign: "middle",
              }}
            >
              <img
                src="https://imgur.com/GBaIP5I.png"
                height="50px"
                width="50px"
                alt="Instagram: TheBrewHouseLP"
                title="Follow us on Instagram!"
              />
            </a>
          </Typography>
        </div>
        <div
          style={{
            alignContent: "center",
            display: "flex",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <img
            src="https://imgur.com/MvGEluY.jpeg"
            height="350"
            width="350"
            style={{ borderRadius: "25px" }}
          />
        </div>
      </div>
    </div>
  );
}
