import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: "Montserrat"
    },
});

const Hoc = props => {
    return (
        <ThemeProvider theme={theme}>
        </ThemeProvider>
    );
};

export default Hoc;