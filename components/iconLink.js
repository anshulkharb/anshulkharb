import React from 'react';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';


const IconLink = (props) => {
    const url = "/static/icons/"+props.name+".png"

    return (

        <Fade timeout={props.timeout} in={true}>
            <Box component='span' mx={.5}><a href={props.url} target="_blank">
                <img src={url} onMouseOver={e => (e.currentTarget.src="/static/icons/"+props.name+"-color.png")}
            onMouseOut={e => (e.currentTarget.src="/static/icons/"+props.name+".png")}></img></a></Box>
         </Fade>
    );
};

export default IconLink;