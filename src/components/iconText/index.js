import React from 'react';
import {
    Grid,
    Typography
} from '@material-ui/core';
import {
    withStyles
} from '@material-ui/core/styles'; 

const styles = {
    icon: {
        verticalAlign: 'sub'
    }
}

export default withStyles(styles)(
    ({
        text,
        classes,
        icon: Icon,
    }) => (
        <Grid 
            container
            spacing={8}
            direction='row'
        >
            <Grid item>
                <Icon
                    className={classes.icon}
                />
            </Grid>
            <Grid item>
                <Typography>
                    <strong>
                        {
                            text
                        }
                    </strong>
                </Typography>
            </Grid>
        </Grid>
    )
);