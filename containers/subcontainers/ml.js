import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Hidden } from '@material-ui/core';
import IconText from '../../components/iconText';


const ML = () => {

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
                    <IconText name="scikit" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="TensorFlow" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="OpenCV" />
                </Grid>
                <Hidden smDown>
                <Grid item xs={12} md={2} lg={4}></Grid>

                <Grid item xs={12} md={2} lg={4}></Grid>
                </Hidden>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="pandas" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="NumPy" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="Scrapy" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="NLTK" />
                </Grid>
                <Hidden smDown>
                <Grid item xs={12} md={2} lg={4}></Grid>

                <Grid item xs={12} md={2} lg={4}></Grid>
                </Hidden>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="Seaborn" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="plotly" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <IconText name="matplotlib" />
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
                    <Box component="span" fontSize='1em'>➕ others</Box>
                </Grid>
                <Hidden smDown>
                <Grid item xs={12} md={2} lg={4}></Grid>


                <Grid item xs={12} md={2} lg={4}></Grid>
                </Hidden>
                <Grid item xs={12} md={8} lg={4}>
                    <br /><Box component="span" fontSize='1em'>💯 Stuff I have built:</Box><br /><br />
                    <Box component="span">+ Building ML powered Saplingo's Career assesment and platform</Box><br />
                    <Box component="span">+ Built Adaptive testing platform for Genius Tiger</Box><br />
                    <Box component="span">Many other projects</Box><br />
                </Grid>
                <Grid item xs={12} md={2} lg={4}></Grid>

            </Grid>
        </Grid>
        );
    };
        
        export default ML;
        
// Hit me Up. Would love to talk on any topic, startup idea, from cyborgs to crisper, automation to climate change, human behivor, history, anthropology, pshychology