import React from 'react';


const YouGreenInstalled = () => {

    return (
        <div>
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
