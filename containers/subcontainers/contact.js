import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";

const Contact = () => {
  const [value, setValue] = useState("hello world");
  const [info, setInfo] = useState("Move pointer over elements.");

  return (
    <Grid
      container
      item
      alignItems="center"
      justify="center"
      direction="column"
      style={{ minHeight: "60vh" }}
    >
      <p>Startup Demo Page</p>
    </Grid>
  );
};

export default Contact;

// Hit me Up. Would love to talk on any topic, startup idea, from cyborgs to crisper, automation to climate change, human behivor, history, anthropology, pshychology
