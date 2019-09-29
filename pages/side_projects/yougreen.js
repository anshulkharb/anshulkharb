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
                <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5d88f23643af7d44"></script>

            </Head>
            <NextSeo
                title="YouGreen: Saving the planet one video at a time"
                description="Do you know that upto 3kg of CO2 is produced per GB of data transfer? But now you can listen to music on YouTube without wasting tons of GB data when music is 
                playing in the background tab. This extension automatically downgrades video quality to lowest when music is playing in the background tab, without downgrading audio quality, 
                and upgrades video quality intelligently when you visit YouTube tab to watch something."
            />

            <GoHome />

            <Grid container>
                <Grid item xs={1} md={3} lg={4}></Grid>
                <Grid container item xs={10} md={6} lg={4} alignItems="flex-start" justify="center" direction="column">

                    
                    <Box component='div' fontSize="3em" >YouGreen: Save the planet one video at a time</Box><br />



                    <img src='/static/side_projects/yougreen/main.jpg' style={{ width: '100%' }}></img><br />


                    <Box component="span" color="grey"> 22 Sep '19</Box><br />


                    <Box component="h4">
                        You can download extnesion from <a href="https://chrome.google.com/webstore/detail/kkmjnhmmeibepfpgnfpodpfjfahbmalm/" target="_blank">here</a>. <a href="https://github.com/anshulkharb/YouGreen" target="_blank">Github</a>
                    </Box>

                    <Box component="div">
                        
                    <div class="addthis_inline_share_toolbox"></div>
            
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
                    There's one another <a href="https://medium.com/stanford-magazine/carbon-and-the-cloud-d6f481b79dfe" target="_blank">article</a>.
                    </Box>
                    <Box component="blockquote" style={{ color: 'grey', fontSize: '1.2em', fontStyle: 'italic' }}>
                    The combination of transmitting your data and storing it in a data center probably requires about 3 to 7 kWh per gigabyte. That’s about a million times more than the energy 
                    you used to save to your hard drive. Instead of 0.1 microwatt-hours, your text document has sucked down 0.1 watt-hours of electrical energy — enough to light an LED bulb for 
                    about 30 seconds.</Box>

                    <Box component="p">
                    Now the carbon footprint of electricity generation varies in different countries because of different sources from which electricity is generated. For example, carbon footprint from electricity generated from coal is much higher as compared to wind or solar.
                    For a rough calculation, let's consider the USA where on average, <a href="http://www.carbonfund.org/how-we-calculate/" target="_blank">1.222 lbs CO2 per kWh</a> which is 0.5534 kg CO2 per kWh.
                    </Box>
                    <Box component="blockquote" style={{ color: 'grey', fontSize: '1.2em', fontStyle: 'italic' }}>
                    Emissions factors for electricity by your monthly bill are based on state based figures from the EPA eGRID to get the state-by-state prices for energy, and the emissions 
                    factors are generated from the Department of Energy’s Energy Information Administration. On average, electricity sources emit 1.222 lbs CO2 per kWh. State CO2 emissions per 
                    kWh may vary greatly in accordance with the amount of clean energy in the energy supply (Vermont: 0.00668 lbs/kWh; Wyoming: 2.041lbs/kWh). (Source: (Source: EPA eGRID Summary Tables)
                    </Box>


                    <Box component="p" style={{ textDecoration: 'underline' }}>
                    For calculating the amount of CO2 produced per GB of data transfer, I'm taking 3kWh(Energy required for 1 GB of data transfer, which ranges from 3-7kWh) and 1.22lbs of CO2(average amount of CO2 produced per kWh of Energy generated), resulting in around 1.5kg CO2/GB.
                    There're no hard and fast rules for such calculation but these are estimations, and I hope these estimations are not true. Please share if you have a better source of data.
                    </Box>


                    <Box component="p">
                    Please check out <a href="https://dl.acm.org/citation.cfm?doid=3290605.3300627">this research paper</a> for more info.
                    Also, check out <a href="https://www.newscientist.com/article/2201769-a-small-youtube-design-change-could-drastically-cut-its-co2-emissions/" target="_blank">this</a>, 
                    <a href="https://www.theverge.com/2019/5/7/18531107/youtube-waste-energy-power-video-streaming-google" target="_blank"> this</a> and <a href="https://www.fastcompany.com/90346595/the-internets-youtube-habit-has-the-carbon-footprint-of-a-small-city">this</a>.
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
                    <img src='/static/side_projects/yougreen/yougreen.png' style={{ width: '100%' }}></img>


                    <Box component="h4">
                    Here's it how it works:
                    </Box>

                    <Box component="p">
                    <ul>
                        <li>Install extension.</li>
                        <li>Now, you can set default quality by clicking the extension's icon located on the address bar.</li>
                        <li>Whenever you change tab different from YouTube, video quality will automatically be downgraded to lowest, with no change in audio quality.</li>
                        <li>And when you'll come back to the YouTab tab, YouGreen will intelligently upgrade to your selected default video quality.</li>
                    </ul>
                    </Box>

                    <Divider />

                    <Box component="h3">
                        For collaboration or anything else, shoot mail at hi@anshulkharb.com
                    </Box>

                </Grid>
                <Grid item xs={1} md={3} lg={4}></Grid>
            </Grid>
            <br />



            <SideProjects />
        </div>
    );
};

export default YouGreen;