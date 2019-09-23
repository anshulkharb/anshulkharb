import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';



const Startup = () => {

    return (
        <Grid container style={{ minHeight: '60vh' }}>
            <Grid item xs={1} md={3} lg={4}></Grid>
            <Grid container item xs={10} md={6} lg={4} alignItems="flex-start" justify="center" direction="column">
                <Box component="span" fontSize='.9em'>I graduated from IIT Kharagpur in May '19. Since then our team has been working full time on Saplingo.</Box><br />
                <span><img src="/static/saplingo.png" style={{ height: '1.7em' }}></img><Box style={{ display: 'inline' }} > <Chip label="2019-Present" size="small" /> <Chip label="WIP" size="small" /></Box></span>
                <Box component="span">Saplingo is a career assessment and planning platform which helps students to achieve the potential of the students with the help of psychology and data science.</Box><br />
                {/* <span><img src="/static/geniustiger.png" style={{ height: '1.7em' }}></img> <Box component="span" style={{ display: 'inline', marginBottom: '-3em' }} fontSize={'1.2em'}> GENIUS TIGER </Box> <Chip label="2019-Present" size="small" /> <Chip label="On Hold" size="small" /></span>
                <Box component="span" fontSize='.9em'>Personal Tutor + AI = Best SAT Prep. We promised 200+ increase in points because of our next generation pedagogy.</Box><br /> */}
                <Box component="span">During my stay at IIT Kharagpur, I worked on several ideas which eventually couldn't take off.<br />
                    + Igni (Social Buying E Commerce platform in 2018)<br />
                    + Sponsdo (Native advertisment + Influencer platform in 2016-17, Received Incubation from CII)<br />
                    + Zopkart (Hyperlocal Grocery Service in Kolkata, Received Angel Funding, in 2015)</Box>
            </Grid>
            <Grid item xs={1} md={3} lg={4}></Grid>
        </Grid>
    );
};

export default Startup;