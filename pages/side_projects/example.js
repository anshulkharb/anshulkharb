import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Head from 'next/head'
import SideProjects from '../../containers/sideProjects';
import GoHome from '../../components/goHome'


const Example = () => {

    return (
        <div>
            <Head>
                <title>Title</title>
                <link rel="icon" type="image/x-icon" href="/static/icons/AK.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>

            <GoHome />

            <Grid container>
                <Grid item xs={2} md={3} lg={4}></Grid>
                <Grid container item xs={8} md={6} lg={4} alignItems="flex-start" justify="center" direction="column">


                    <Box component='h1'>Title of this page is title</Box>

                    <img src='/static/software.jpg' style={{ width: '100%' }}></img>

                    <Box component='p'>
                        Hello fellow human, if you want to talk on any topic ranging from history to future, from present to now, ping me on twitter, would love to discuss. 😀
                        Also, I post random thoughts on, if you want to to check out.
                    </Box>

                    <Box component='p'>
                        Hello fellow human, if you want to talk on any topic ranging from history to future, from present to now, ping me on twitter, would love to discuss. 😀
                        Also, I post random thoughts on, if you want to to check out.
                    </Box>

                    <Box component='p'>
                        Hello fellow human, if you want to talk on any topic ranging from history to future, from present to now, ping me on twitter, would love to discuss. 😀
                        Also, I post random thoughts on, if you want to to check out.
                    </Box>


                </Grid>
                <Grid item xs={2} md={3} lg={4}></Grid>
            </Grid>
            <br />



            <SideProjects />
        </div>
    );
};

export default Example;