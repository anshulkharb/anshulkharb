import React from 'react';
import Grid from '@material-ui/core/Grid';
import HelloWorld from './helloWorld';
import Bio from './bio';
import Essays from './essays';
import SideProjects from './sideProjects';
import InfoFooter from './infoFooter';
import { connect } from 'react-redux';
import Startup from './subcontainers/startup'
import Software from './subcontainers/software'
import ML from './subcontainers/ml'
import Twitter from './subcontainers/twitter'
import KGP from './subcontainers/kgp'
import Contact from './subcontainers/contact'


const Home = ({ startup, developer, ml, twitter, kgp, contact }) => {

        

    return (

        <div>

            <Grid>

            {/* <Grid style={{ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', 
            backgroundImage: 
                startup ? 
                    'linear-gradient(to bottom, #23074d , grey)' : 
                        developer ?
                            'url("/static/software.jpg")' :
                                ml ?
                                    'linear-gradient(to right, red , yellow)' :
                                        twitter ?
                                            'linear-gradient(to right, red , yellow)' :
                                                contact ? 
                                                    'linear-gradient(to right, red , yellow)' :
                                                        kgp ?
                                                            'linear-gradient(to right, red , yellow)' :
                                                                'linear-gradient(to right, white , white)' }}> */}

                { startup ? 
                    <Startup /> : 
                        developer ?
                            <Software /> :
                                ml ?
                                    <ML /> :
                                        twitter ?
                                            <Twitter /> :
                                                kgp ?
                                                    <KGP /> :
                                                        contact ?
                                                            <Contact /> :
                                                                <HelloWorld />}

                <Bio />

                {/* <Essays /> */}

                {/* <SideProjects /> */}

                <InfoFooter />

            </Grid>

        </div>
    );

};


const mapStateToProps = state => ({
    startup: state.startup,
    developer: state.developer,
    ml: state.ml,
    twitter: state.twitter,
    kgp: state.kgp,
    contact: state.contact
})


export default connect(mapStateToProps, null)(Home);