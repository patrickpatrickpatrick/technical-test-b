import React from 'react';
import AppBar from './components/appBar';
import RoomsPage from './pages/roomsPage/';
import ListingPage from './pages/listingPage/';
import ProfilePage from './pages/profilePage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { 
  withStyles
} from '@material-ui/core/styles';
import {
  compose
} from 'recompose';

const styles = {
  app: {
    backgroundColor: ' #f0f0f5'
  }
}

// the font i was supposed to use is not free?

const App = ({
  classes,
}) => (
  <div className={classes.app}>
    <header>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
    </header>
    <Router>
      <div>
        <AppBar/>
        <Route path='/' exact component={RoomsPage} />
        <Route path='/listings/:id' exact component={ListingPage} />
        <Route path='/profile/:id' exact component={ProfilePage} />
      </div>
    </Router>
  </div>
)
export default compose(
  withStyles(styles),
)(
  App
);
