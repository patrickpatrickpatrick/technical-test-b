import React from 'react';
import { 
    Grid,
    Typography,
} from '@material-ui/core';
import {
    withStyles
} from '@material-ui/core/styles';
import Content from './../../components/content';

const styles = {
    gridPaperContainer: {
        padding: 20
    }
}

const ListingsPage = ({
    classes
}) => (
    <Content>
        <Grid
            container
            className={
                classes.gridPaperContainer
            }
        >
            <Grid item>
                <Typography>
                    Listing Page Pending Design
                </Typography>
            </Grid>
        </Grid>
    </Content>
);

export default withStyles(
    styles
)(
    ListingsPage
);

