import React from 'react';
import { Grid } from '@material-ui/core';

export default ({ 
    children,
    centerVertically,
}) => <Grid
    container
    direction="column"
    alignItems="center"
    justify= {
        centerVertically ? "center" : 'flex-start'
    }
    style={{ 
        minHeight: '100vh'
    }}
>
    <Grid item>
        {
            children
        }
    </Grid>
</Grid>