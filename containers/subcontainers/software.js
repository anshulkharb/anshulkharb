import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import { Hidden } from '@material-ui/core';
import IconText from '../../components/iconText';


const Software = () => {

    return (
        <Grid container item alignItems="center" justify="center" direction="column" style={{ minHeight: '60vh' }}>
            <Grid container spacing={2}>

                <Grid item xs={12}></Grid>

                <Grid item xs={12} md={2} lg={4}></Grid>
                <Grid item xs={12} md={8} lg={4}>
                    <Box component="span" fontSize='1.2em'>👌 Stuff I know:</Box>
                </Grid>
                <Hidden smDown>
                    <Grid item xs={12} md={2} lg={4}></Grid>

                    <Grid item xs={12} md={2} lg={4}></Grid>
                </Hidden>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="Python" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="JS" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="HTML" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="CSS" />
                </Grid>
                <Hidden smDown>
                    <Grid item xs={12} md={2} lg={4}></Grid>

                    <Grid item xs={12} md={2} lg={4}></Grid>
                </Hidden>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="nodeJS" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="ExpressJS" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="django" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="GraphQL" />
                </Grid>
                <Hidden smDown>
                    <Grid item xs={12} md={2} lg={4}></Grid>

                    <Grid item xs={12} md={2} lg={4}></Grid>
                </Hidden>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="React" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="React Native" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="Angular" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="Flutter" />
                </Grid>
                <Hidden smDown>
                    <Grid item xs={12} md={2} lg={4}></Grid>

                    <Grid item xs={12} md={2} lg={4}></Grid>
                </Hidden>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="mongoDB" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="PostgreSQL" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="MySQL" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <Box component="span" fontSize='1em'>➕ others</Box>
                </Grid>
                <Hidden smDown>
                    <Grid item xs={12} md={2} lg={4}></Grid>


                    <Grid item xs={12} md={2} lg={4}></Grid>
                </Hidden>
                <Hidden smDown>
                    <Grid item xs={12} md={8} lg={4} style={{ fontSize: '12px' }}>
                    <br /><Box component="span" fontSize='1em'>💯 Stuff I have built:</Box><br /><br />
                    <Box component="span">+ Building web and mobile app for Saplingo</Box><br />
                    <Box component="span">+ Developed YouGreen: Save the planet one  video at a time, a chrome extension</Box><br />
                    <Box component="span">+ Built Genius Tiger web app, with virtual classroom feature, for tutors, students, parents and admins</Box><br />
                    <Box component="span">+ Built Tutor Bin's web app for tutors, students and admin dashboard with CRM</Box><br />
                    <Box component="span">+ Built Igni's e-commerce app</Box><br />
                    <Box component="span">+ Built Sponsdo's native ad distribution platform for publishers, influencers and advertisers</Box><br />
                    <Box component="span">Many other projects</Box><br />
                </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid item xs={12} md={8} lg={4} style={{ fontSize: '10px' }}>
                    <br /><Box component="span" fontSize='1em'>💯 Stuff I have built:</Box><br /><br />
                    <Box component="span">+ Building web and mobile app for Saplingo</Box><br />
                    <Box component="span">+ Developed 2 Chrome extensions: Extension 1 and Extension 2</Box><br />
                    <Box component="span">+ Built Genius Tiger web app, with virtual classroom feature, for tutors, students, parents and admins</Box><br />
                    <Box component="span">+ Built Tutor Bin's web app for tutors, students and admin dashboard with CRM</Box><br />
                    <Box component="span">+ Built Igni's e-commerce app</Box><br />
                    <Box component="span">+ Built Sponsdo's native ad distribution platform for publishers, influencers and advertisers</Box><br />
                    <Box component="span">Many other projects</Box><br />
                </Grid>
                </Hidden>
                <Grid item xs={12} md={2} lg={4}></Grid>

            </Grid>
        </Grid>
    );
};

export default Software;