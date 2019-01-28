import React from 'react';
import {
    Grid,
} from '@material-ui/core';
import {
    withStyles
} from '@material-ui/core/styles'; 

const styles = {
    gridColumn: {
        margin: 'auto 0'
    },
    gridColumnOutline: {
        borderLeft: `2px solid black`
    }
};

export default withStyles(styles)(
    ({
        columns,
        classes,
        seperator,
        uuid,
    }) => (<Grid
        container
        spacing={8}
    >
        {
            columns.map((
                column,
                index
            ) => (
                <React.Fragment
                    key={`${uuid}-${index}`}
                >
                    {
                        index > 0 && seperator && <Grid item> | </Grid>
                    }
                    <Grid
                        item
                        className={`${
                            classes.gridColumn
                        }`}
                    >
                        {
                            column
                        }
                    </Grid>
                </React.Fragment>
            ))
        }
    </Grid>    
    )
);