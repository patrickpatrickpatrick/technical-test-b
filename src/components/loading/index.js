import React from 'react';
import { 
    Grid,
    Typography,
    CircularProgress,
} from '@material-ui/core';

export default () => (
    <Grid
        container
        spacing={16}
        direction={'column'}
        style={{
            textAlign: 'center',
        }}
    >
        <Grid item>
            <CircularProgress />
        </Grid>
        <Grid item>
            <Typography>
                Loading, please wait...
            </Typography>
        </Grid>
    </Grid>
)