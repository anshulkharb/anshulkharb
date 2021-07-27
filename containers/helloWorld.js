import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import IconLink from '../components/iconLink';


const HelloWorld = ({  }) => {
    const [value, setValue] = useState("hello world");
    const [info, setInfo] = useState("Move pointer over elements.");

    return (
        <Grid container item alignItems="center" justify="center" direction="column" style={{ minHeight: '60vh' }}>
            <Fade timeout={1000} in={true}>
                <span style={{ fontSize: '35px', color: '#686868' }} onMouseOut={() => setValue('hello world')}
                 onMouseOver={() => setValue('👋 🌏')}>
                    {value}
                </span>
            </Fade>

            <Fade timeout={2000} in={true}>
                <Box>
                    <p style={{ marginTop: '-3px', color: 'grey', fontSize: '20px' }} >I'm Anshul Kharb.</p>
                </Box>
            </Fade>

            <div style={{ marginTop: '-15px' }}>
                <IconLink name="twitter" url="https://twitter.com/anshuIkharb" timeout={2500} />
                <IconLink name="linkedin" url="https://www.linkedin.com/in/anshulkharb/" timeout={3000} />
                <IconLink name="messenger" url="https://m.me/kharb.anshul" timeout={3500} />
                {/* <IconLink name="github" url="" timeout={4000} />
                <IconLink name="medium" url="" timeout={4500} /> */}
            </div>
        </Grid>

    );
};


export default HelloWorld

// Hit me Up. Would love to talk on any topic, startup idea, from cyborgs to crisper, automation to climate change, human behivor, history, anthropology, pshychology