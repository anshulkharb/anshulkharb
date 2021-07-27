import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";

const Software = () => {
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
          <img src="/static/tblogo.svg" style={{ height: "3em" }}></img>
          <Box style={{ display: "inline" }}>
            <br />
            <br />
            Tech Lead <Chip mr={2} label="2017-2019" size="small" />{" "}
            <Chip mr={2} label="July '20 - Present" size="small" />
          </Box>
        </span>
        <br />
        <Box component="span">
          Tutorbin helps university/college students across globe in homework
          help.
          <br />
          Developed first version of the apps from scratch, now working on new
          initiatives.
        </Box>
        <br />
        <small>
          <i>
            <a href="https://tutorbin.com" target="_blank">
              Link
            </a>
          </i>
        </small>
      </Grid>
      <Grid item xs={1} md={3} lg={4}></Grid>
    </Grid>
  );
};

export default Software;
