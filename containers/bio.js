import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Fade from "@material-ui/core/Fade";
import BioLink from "../components/bioLink";
import { connect } from "react-redux";
import {
  startup,
  developer,
  ml,
  twitter,
  kgp,
  contact,
  toggleStartup,
  toggleDeveloper,
  toggleML,
  toggleTwitter,
  toggleKGP,
  toggleContact,
} from "../redux/actions/actions";

const Bio = ({
  startup,
  developer,
  ml,
  twitter,
  kgp,
  contact,
  toggleStartup,
  toggleDeveloper,
  toggleML,
  toggleTwitter,
  toggleKGP,
  toggleContact,
}) => {
  return (
    <Fade timeout={2000} in={true}>
      <Grid
        container
        alignItems="flex-start"
        justify="center"
        style={{ minHeight: "30vh" }}
      >
        <Grid items xs={3}></Grid>
        <Grid items xs={6} align="center">
          <BioLink
            name="GoPerceptive"
            status={startup}
            onMouseOver={toggleStartup}
          />
          <Hidden mdUp>
            <br />
          </Hidden>
          <BioLink
            name="Tutorbin"
            status={developer}
            onMouseOver={toggleDeveloper}
          />
          <Hidden mdUp>
            <br />
          </Hidden>
          <BioLink name="DiscoverCareer" status={ml} onMouseOver={toggleML} />
          <br />
          <Hidden smDown>
            <br />
          </Hidden>
          <BioLink
            name="Side Projects"
            status={twitter}
            onMouseOver={toggleTwitter}
          />
          <Hidden mdUp>
            <br />
          </Hidden>
          {/* <BioLink name="Write Essays" /><Hidden mdUp><br /></Hidden> */}
          <BioLink name="About" status={kgp} onMouseOver={toggleKGP} />
          <Hidden mdUp>
            <br />
          </Hidden>
          <BioLink
            name="Connect"
            status={contact}
            onMouseOver={toggleContact}
          />
          <Hidden mdUp>
            <br />
          </Hidden>
          {/* <BioLink name="Connect" /><br /> */}
        </Grid>
        <Grid items xs={3}></Grid>
      </Grid>
    </Fade>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleStartup: () => dispatch(toggleStartup()),
  toggleDeveloper: () => dispatch(toggleDeveloper()),
  toggleML: () => dispatch(toggleML()),
  toggleTwitter: () => dispatch(toggleTwitter()),
  toggleKGP: () => dispatch(toggleKGP()),
  toggleContact: () => dispatch(toggleContact()),
});

const mapStateToProps = (state) => ({
  startup: state.startup,
  developer: state.developer,
  ml: state.ml,
  twitter: state.twitter,
  kgp: state.kgp,
  contact: state.contact,
});

export default connect(mapStateToProps, mapDispatchToProps)(Bio);

// Waiting for someone to build social podcast app
// Way behind ny goofreads yearly goal
// Post Random thoughts on twitter
// Writes Essays
// waitng for Notion to launch their APIs to share my readings
