import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";

const KGP = () => {
  return (
    <Grid container style={{ minHeight: "60vh" }}>
      <Grid item xs={2} md={3} lg={4}></Grid>
      <Grid
        container
        item
        xs={8}
        md={6}
        lg={4}
        alignItems="flex-start"
        justify="center"
        direction="column"
      >
        <Box component="span" fontSize=".9em">
          Hello fellow evolved H, I'm Anshul Kharb. <br />
          <br />
          I work as Tech Lead at Tutorbin and advise GoPerceptive.
          <br />
          I graduated from IIT Kharagpur in 2019. Post my graduation I
          co-founded DiscoverCaree(dormant) and GoPerceptive that is leading
          eCommerce Analytics and Intelligence company and counts brands like
          Marico, Hersheys, mcCormick as clients.
          <br />
          <br />
          During my graduation, I started Zopkart(Online grocery in Kolkata) in
          2015, Sponsdo(Influencer marketing) in 2016-2017 and Igni(Group
          buying) in 2018-2019. None of which worked out but gave me immense
          learning in various dimensions.
          <br />
          <br />
          If you love to discuss anything startup or stuff ranging from history
          to future, from present to now, I'm game, DM me on twitter.
        </Box>
      </Grid>
      <Grid item xs={2} md={3} lg={4}></Grid>
    </Grid>
  );
};

export default KGP;

// Hit me Up. Would love to talk on any topic, startup idea, from cyborgs to crisper, automation to climate change, human behivor, history, anthropology, pshychology
