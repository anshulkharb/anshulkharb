import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import IconLink from "../../components/iconLink";
import { Divider } from "@material-ui/core";

const Twitter = () => {
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
        <span style={{ fontSize: "1.5em" }}>thumbnail</span>
        <Box component="span">
          Thumbnail/Preview generator for 450 different filetypes in python.
          <br />
          <small>
            <i>
              <a href="https://pypi.org/project/thumbnail/" target="_blank">
                Link
              </a>
            </i>
          </small>
        </Box>

        <br />
        <br />
        <span style={{ fontSize: "1.5em" }}>
          <img src="/static/gifblocker.jpg" style={{ height: "1.5em" }}></img>
        </span>
        <Box component="span">
          Clean up your Internet experience by blocking distracting GIFs.
          <br />
          <small>
            <i>
              <a
                href="https://chrome.google.com/webstore/detail/gif-blocker/bdhijffnjccdajojfpahnjfeladlpefp"
                target="_blank"
              >
                Link
              </a>
            </i>
          </small>
        </Box>

        <br />
        <br />
        <span style={{ fontSize: "1.5em" }}>
          <img src="/static/yougreen.jpg" style={{ height: "1.5em" }}></img>
        </span>
        <Box component="span">
          Listen to music on YouTube without wasting tons of GB data when it's
          playing in the background tab, no comprome in audio quality.
          <br />
          <small>
            <i>
              <a
                href="https://chrome.google.com/webstore/detail/yougreen-save-data-one-vi/kkmjnhmmeibepfpgnfpodpfjfahbmalm"
                target="_blank"
              >
                Link
              </a>
            </i>
          </small>
        </Box>
      </Grid>
      <Grid item xs={1} md={3} lg={4}></Grid>
    </Grid>
  );
};

export default Twitter;
