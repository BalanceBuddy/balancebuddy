import React from "react";
import { Card, makeStyles } from "@material-ui/core";

export default function CarouselSlide(props) {
  const { background, title } = props.content;

  const useStyles = makeStyles(() => ({
    card: {
      background,
      borderRadius: 5,
      backgroundSize: "500px 600px",
      width: "100%",
      height: "125px",
      padding: "75px 50px",
      margin: "0px 25px",

      display: "flex",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <img src={background} alt="Logo" />
    </Card>
  );
}
