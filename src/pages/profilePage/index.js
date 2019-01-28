import React from 'react';
import { 
    Grid,
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

const ProfilePage = ({
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
                Profile Page Pending Design
            </Grid>
        </Grid>
    </Content>
);

export default withStyles(
    styles
)(
    ProfilePage
);