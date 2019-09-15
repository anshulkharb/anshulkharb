import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';


const KGP = () => {

    return (
        <Grid container item alignItems="center" justify="center" direction="column" style={{ minHeight: '60vh' }}>
            <Box component='span'>
                <img src="/static/KGP.jpeg" style={{ width: '30vw' }}></img>
            </Box><br />
            <Box component='span' fontSize='1.1em'>
                🎓 I graduated from IIT Kharagpur, India's top university, in May '19.
            </Box>
        </Grid>
    );
};

export default KGP;

// Hit me Up. Would love to talk on any topic, startup idea, from cyborgs to crisper, automation to climate change, human behivor, history, anthropology, pshychology