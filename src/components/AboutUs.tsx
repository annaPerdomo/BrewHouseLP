import { Typography } from "@mui/material";

import useDeviceSize from "../hooks/useDeviceSize";

export default function AboutUs() {
  const { width } = useDeviceSize();
  const isMobile = width <= 500;

  return (
    <div>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ textAlign: "center", marginBottom: "1%" }}
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            cursus enim nec turpis pellentesque, at varius massa lacinia. Nam
            accumsan tellus quam, ut porta orci posuere in. Proin quis neque sed
            ante pretium condimentum. Duis hendrerit sem non sem scelerisque
            finibus. Nunc ut hendrerit eros. Ut ullamcorper ex enim, quis
            imperdiet dui varius vel. Maecenas ligula est, aliquet quis urna in,
            tristique commodo leo. Maecenas tincidunt magna lectus. Maecenas
            justo eros, suscipit et ex ac, finibus lacinia odio.
          </p>
          <p>
            Follow us on Instagram:
            <a
              href="https://www.instagram.com/thebrewhouselp/"
              style={{
                verticalAlign: "middle",
              }}
            >
              <img
                src="/instagram.png"
                height="50px"
                width="50px"
                alt="Instagram: TheBrewHouseLP"
                title="Follow us on Instagram!"
              ></img>
            </a>
          </p>
        </div>
        <div
          style={{
            alignContent: "center",
            display: "flex",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* <div style={{position: "relative", zIndex: 1}}> */}
          <img
            src="https://imgur.com/MvGEluY.jpeg"
            height="350"
            width="350"
            style={{ borderRadius: "5%" }}
          />
          {/* </div> */}
          {/* <div
            style={{
              position: "absolute",
              display: isMobile ? "none" : "block",
            }}
          >
            <img src="https://picsum.photos/350/400" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
