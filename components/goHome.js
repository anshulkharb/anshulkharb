import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Hidden from '@material-ui/core/Hidden';


const GoHome = () => {

    return (
        <div>
            <Hidden smDown>
                <div style={{ position: 'fixed', top: '3vh', left: '12vW', zIndex: '100', textDecoration: 'none' }}>
                    <Link href='/'>
                        <a><img src='/static/icons/home.png'></img></a>
                    </Link>
                </div>
            </Hidden>
            <Hidden mdUp>
                <div style={{ position: 'fixed', top: '2vh', left: '1.5vh', zIndex: '100', textDecoration: 'none' }}>
                    <Link href='/'>
                        <a><img src='/static/icons/home.png'></img></a>
                    </Link>
                </div>
            </Hidden>
        </div>
    );
};

export default GoHome;