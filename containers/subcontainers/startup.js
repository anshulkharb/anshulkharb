import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";

const Startup = () => {
  return (
    <Grid container style={{ minHeight: "60vh" }}>
      <Grid item xs={1} md={3} lg={4}></Grid>
      <Grid
        container
        item
        xs={10}
        md={6}
        lg={4}
        alignItems="flex-start"
        justify="center"
        direction="column"
      >
        <span>
          <img src="/static/goLogo.png" style={{ height: "3em" }}></img>
          <Box style={{ display: "inline" }}>
            <br />
            <br />
            Co-Founder, CTO{"   "}
            <Chip mr={2} label="June '19 - July '20" size="small" />
            <br />
            <Box mt={.5}></Box>
            Part-time{"   "}
            <Chip mr={2} label="July '20 - Present" size="small" />
          </Box>
        </span>
        <br />
        <Box component="span">
        </Box>
        <br />
        <small>
          <i>
            <a href="https://discovercareer.in" target="_blank">
              Link
            </a>
          </i>
        </small>
      </Grid>
      <Grid item xs={1} md={3} lg={4}></Grid>
    </Grid>
  );
};

export default Startup;
