import React from "react";
import { createMuiTheme, ThemeProvider, Typography } from "@mui/material";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

export default function Home(props: {
  offset: Number;
  handleClick: (offset: number) => void;
  isMobile: boolean;
}) {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Sora", "sans-serif"].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Typography
            variant="h2"
            style={{
              textDecoration: "none",
              color: "#fff1db",
              position: "relative",
              left: props.isMobile ? "80px" : "0px",
            }}
          >
            Calgary's top choice for quality landscaping and snow removal
          </Typography>
          {/*<Typography
            variant="h1"
            style={{ textDecoration: "none", color: "orange" }}
          >
            Landscaping
          </Typography>*/}
          <button
            className="button-77"
            role="button"
            style={{ marginTop: "40px",left: props.isMobile ? "80px" : "0px", }}
            onClick={() => props.handleClick(2)}
          >
            Book Now
          </button>
        </div>
      </ThemeProvider>
      <img
        src={require("../images/markus.png")}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "35vw",
          borderRadius: "5px",
          position: "relative",
          bottom: props.isMobile ? "350px" : "20px",
          right: props.isMobile ? "50px" : "0px",
        }}
      />
      {!props.isMobile && (
        <img
          src={require("../images/buildsquare.png")}
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "15vw",
            alignSelf: "flex-start",
            borderRadius: "5px",
            position: "relative",
            right: "60px",
            top: "40px",
          }}
        />
      )}
    </>
  );
}
