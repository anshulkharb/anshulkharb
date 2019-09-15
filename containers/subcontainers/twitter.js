import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import IconLink from '../../components/iconLink';


const Twitter = () => {

    return (
        <Grid container style={{ minHeight: '60vh' }}>
            <Grid item xs={2} md={3} lg={4}></Grid>
            <Grid container item xs={8} md={6} lg={4} alignItems="flex-start" justify="center" direction="column">
                <Box component='span' fontSize='1.2em'>Hello fellow human, if you want to talk on any topic ranging from 
                history to future, from present to now, ping me on twitter, I would love to discuss. 😀
            <br /><br />Also, I post random thoughts on <IconLink name="twitter" url="" />, if you want to to check out.</Box>
            </Grid>
            <Grid item xs={2} md={3} lg={4}></Grid>
        </Grid>
    );
};

export default Twitter;