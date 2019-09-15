import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';


const InfoFooter = () => {
    const [info, setInfo] = useState("");

    return (
        <div style={{position: 'fixed', bottom: '0', right: '0', zIndex: '100', color: 'blue'}}>
            <p onPointerEnter={() => setInfo(info === 'Move pointer or tap over elements.' ? '' : 'Move pointer or tap over elements.')}>{info} ℹ️</p>
        </div>
    );
};

export default InfoFooter;