import React from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Home from '../containers/home'
import reducer from '../redux/reducers/reducer'
import Box from '@material-ui/core/Box';
import ReactGA from 'react-ga';


ReactGA.initialize('UA-147952898-1');
ReactGA.pageview('/');

const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

const Index = () => {
  return (
    <Provider store={store}>
    <Head>
      <title>Anshul Kharb</title>
      <link rel="icon" type="image/x-icon" href="/static/AK.jpg" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Box fontFamily='Montserrat'>
      <Home />
    </Box>
    </Provider>
  );
}

export default Index