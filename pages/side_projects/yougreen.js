import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Head from 'next/head'
import { NextSeo } from 'next-seo';
import SideProjects from '../../containers/sideProjects';
import GoHome from '../../components/goHome'
import Divider from '@material-ui/core/Divider';


const YouGreen = () => {

    return (
        <div>
            <Head>
                <title>YouGreen: Saving the planet one video at a time</title>
                <link rel="icon" type="image/x-icon" href="/static/icons/AK.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
            <NextSeo
                title="YouGreen: Saving the planet one video at a time"
                description="Do you know that upto 3kg of CO2 is produced per GB of data transfer? But now you can listen to music on YouTube without wasting tons of GB data when music is 
                playing in the background tab. This extension automatically downgrades video quality to lowest when music is playing in the background tab, without downgrading audio quality, 
                and upgrades video quality intelligently when you visit YouTube tab to watch something."
            />

            <GoHome />

            <Grid container>
                <Grid item xs={2} md={3} lg={4}></Grid>
                <Grid container item xs={8} md={6} lg={4} alignItems="flex-start" justify="center" direction="column">

                    
                    <Box component='div' fontSize="3em" >YouGreen: Save the planet one video at a time</Box><br />



                    <img src='/static/side_projects/main.png' style={{ width: '100%' }}></img><br />


                    <Box component="span" color="grey"> 22 Sep '19</Box><br />


                    <Box component="h4">
                        You can download extnesion from <a href="https://chrome.google.com/webstore/detail/kkmjnhmmeibepfpgnfpodpfjfahbmalm/" target="_blank">here</a>. <a href="https://github.com/anshulkharb/YouGreen" target="_blank">Github</a>
                    </Box>



                    <Box component='p'>
                    From cat videos to live game streaming, the world loves to watch videos on YouTube. YouTube has a variety of categories of videos, but music dominates them 
                    all, <a href="https://en.wikipedia.org/wiki/List_of_most-viewed_YouTube_videos" target="_blank" >almost all</a> the most-watched videos are music videos. It is a general process that 
                    we start playing our latest favorite on one tab and continue doing some other stuff a different tab. But there's one problem in this, what? In the background tab, one song ends 
                    and another starts and it goes on, still couldn't figure out the problem? Problem is that videos are running continuously in the background and they're fetching 100s of MB on full HD quality.
                    </Box><br />

                    <Box component="p">
                    Now let's jump into a different story. Some days ago, I came across <a href="https://www.emergeinteractive.com/insights/detail/does-irresponsible-web-development-contribute-to-global-warming/" target="_blank">this article</a>
                    </Box>
                    <Box component="blockquote" style={{ color: 'grey', fontSize: '1.2em', fontStyle: 'italic' }}>
                    According to the American Council for an Energy-Efficient Economy it takes 5.12 kWh of electricity per gigabyte of transferred data. And according to the Department of Energy 
                    the average US power plant expends 600 grams of carbon dioxide for every kWh generated. That means that transferring 1GB of data produces 3kg of CO2.
                    </Box>
                    <Box component="p">
                    (I cross-checked the data with different references, and surprisingly and unfortunately these numbers seem to accurate, possibly.)
                    </Box>

                    
                    <Box component="p">
                    Now let's check some other numbers, <a href="https://help.netflix.com/en/node/87" target="_blank">according to Netflix</a>.
                    </Box>
                    <Box component="blockquote" style={{ color: 'grey', fontSize: '1.2em', fontStyle: 'italic' }}>
                    Watching TV shows or movies on Netflix uses about 1 GB of data per hour for each stream of standard definition video, and up to 3 GB per hour for each stream of HD video.
                    </Box><br />

                    <Box component="p">
                    For a rough idea, a car produces around 150-200gm of CO2 per km driven. Also, you can google the Carbon footprint of any daily activity.
                    </Box><br />

                    <Box component="p">
                    
                    </Box>

                    <Box component="p">
                    Now, coming back to the problem, we know that music videos are still running continuously in the background tab(since I start writing this article) while fetching 100s of MB on full HD quality, but what if 
                    there's a way in which we can still listen to the music in the same quality by restricting video quality to the lowest, which we were not watching anyway and it'll function 
                    by fetching just fraction of the data compared to former way.
                    </Box>

                    <Box component="p">
                    So, here's the simple solution, YouGreen: saving the planet one video at a time.
                    </Box><br />
                    <img src='/static/side_projects/yougreen.png' style={{ width: '100%' }}></img>


                    <Box component="h4">
                    Here's it how it works:
                    </Box>

                    <Box component="p">
                    Just install YouGreen. Now whenever any video that will autoplay in the background, it's video quality will automatically be downgraded to lowest. And when you'll come back 
                    to that tab, that was playing music in background, and play some other video manually, YouGreen will intelligently upgrade video quality.
                    </Box>

                    <Divider />

                    <Box component="h3">
                        For collaboration or anything else, shoot mail at hi@anshulkharb.com
                    </Box>

                </Grid>
                <Grid item xs={2} md={3} lg={4}></Grid>
            </Grid>
            <br />



            <SideProjects />
        </div>
    );
};

export default YouGreen;