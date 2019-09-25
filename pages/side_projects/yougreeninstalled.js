import React from 'react';
import Head from 'next/head'


const YouGreenInstalled = () => {

    return (
        <div>
        <Head>
            <title>Thanks for intalling YouGreen: Saving the planet one video at a time</title>
            <link rel="icon" type="image/x-icon" href="/static/icons/AK.png" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5d88f23643af7d44"></script>

        </Head>
            <h2>Thanks for installing YouGreen</h2>
            <a href="https://anshulkharb.com/side_projects/yougreen" target="_blank">Share this extension with your friends to save data and environment.</a>
            
            <h3>How it works:</h3>
            <p>
                <ul>
                    <li>You can set default quality by clicking extension's icon located on address bar.</li>
                    <li>Now whenever any video that will autoplay in the background, it's video quality will automatically be downgraded to lowest.</li>
                    <li>And when you'll come back to that tab, that was playing music in background, and play some other video manually, YouGreen will intelligently upgrade video quality.</li>
                </ul>
            </p>

        </div>
    );
}


export default YouGreenInstalled;
