import React from 'react';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';
import Essays from '../containers/essays';
import Link from 'next/link';
import Chip from '@material-ui/core/Chip';


const EssayLink = (props) => {

    return (
        <Box component='span' fontSize='15px' my={1} mx={2}>
            <Link href={props.url}>
                <a style={{ textDecoration: 'none', color: 'white' }}>{props.name} </a>
            </Link>
        </Box>
    );
};

export default EssayLink;