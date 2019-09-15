import React from 'react';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';
import Fade from '@material-ui/core/Fade';


const BioLink = ({ name, status, onMouseOver, onMouseOut }) => {

    return (
        <Box component='span' fontSize='18px' mx={1} my={1} 
            style={{ fontWeight: status ? 'bold' : 'inherit', color: status ? 'grey' : 'grey', cursor: status ? 'none': 'default' }}
            onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{name}</Box>
    );
};

export default BioLink;