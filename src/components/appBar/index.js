import React from 'react';
import {
    AppBar as MUIAppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
} from '@material-ui/core';
import {
    withStyles
} from '@material-ui/core/styles';
import {
    withRouter
} from 'react-router-dom';
import {
    compose
} from 'recompose';

const styles = {
    buttonContainer: {
        textAlign: 'right',
    },
    button: {
        backgroundColor: 'red',
    },
    appBarTitle: {
        color: 'white',
    }
};

const pathToTitle = pathname => pathname.split('/')[1] ? {
    'listings': 'Viewing Listing',
    'profile': 'Viewing Profile',
}[pathname.split('/')[1]] : 'Home';

export const AppBar = ({
    token,
    logout,
    classes,
    history,
}) => (
    <MUIAppBar
        position='static'
    >
        <Toolbar>
            <Grid container>
                <Grid item xs={10}>
                    <Typography
                        variant="h6"
                        className={classes.appBarTitle}
                    >
                        {
                            pathToTitle(history.location.pathname)
                        }
                    </Typography>
                </Grid>
                <Grid
                    item xs={2}
                    className={classes.buttonContainer}
                >
                    {
                        history.location.pathname.split('/')[1] && <Button
                            color="inherit"
                            className={classes.button}
                            onClick={
                                () => history.push('/')
                            }
                        >
                            Back
                        </Button>
                    }
                </Grid>
            </Grid>
        </Toolbar>
    </MUIAppBar>
);

export default compose(
    withStyles(styles),
    withRouter,
)(
    AppBar
)