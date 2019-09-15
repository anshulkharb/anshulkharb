import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';


const GoHome = () => {

    return (
        <div style={{position: 'fixed', top: '3vh', left: '3vh', zIndex: '100', textDecoration: 'none'}}>
            <Link href='/'>
                <a><img src='/static/icons/home.png'></img></a>
            </Link>
        </div>
    );
};

export default GoHome;