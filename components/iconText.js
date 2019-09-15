import React from 'react';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';


const IconText = (props) => {
    const url = "/static/logos/"+props.name+".png"

    return (
        <div>
        <Box component='span' my='auto' fontSize='.9em'>
            <img src={url} style={{ height: '1.5em' }}></img></Box> 
        </div>
    );
};

export default IconText;