import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import EssayLink from '../components/essayLink';


const Essays = () => {

    return (
        <Grid>
            <Grid container alignItems="" justify="flex-start" style={{ minHeight: '10vh', color: 'white', backgroundColor: '#989898' }}>
                <Grid item xs={12} md={3}></Grid>
                <Grid container item alignItems="flex-end"  justify="" direction="column" xs={3} md={2} style={{ margin: '2vh 0 2vh 0', paddingRight: '2vh' }}>
                    <Box component='p' fontSize='20px'>Essays</Box>
                </Grid>
                <Grid container item alignItems=""  justify="" direction="column" xs={9} md={5} style={{ margin: '2vh 0 2vh 0', borderStyle: 'solid', borderWidth: '0px 0px 0px 0.2px', borderColor: 'lightgrey' }}>
                    <EssayLink name="Waiting for someone to build social podcast app" url="/essays/example" />
                    <EssayLink name="Post Random thoughts on twitter" url="" />
                    <EssayLink name="Name" url="" />
                </Grid>
                <Grid item xs={12} md={3}></Grid>
            </Grid>
        </Grid>
    );
};

export default Essays;