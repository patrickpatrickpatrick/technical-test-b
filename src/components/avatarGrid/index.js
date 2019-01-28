import React from 'react';
import {
    withState,
    compose,
} from 'recompose';
import {
    Grid,
} from '@material-ui/core';
import {
    withStyles
} from '@material-ui/core/styles';
import {
    withRouter
} from 'react-router-dom';
import ExpandedAvatarGrid from './expandedAvatarGrid';
import CollapsedAvatarGrid from './collapsedAvatarGrid';
import {
    noop
} from './../../utils';

const styles = {
    parentAvatarGridContainer: {
        height: '100%',        
    },
    avatarGridContainer: {
        width: '100%',
        overflow: 'hidden',
    }
};

export const expandedAction = component => withState(
    'expanded',
    'setExpanded',
    false,
)(component);

export const AvatarGrid = ({
    roommates = [],
    classes = {},
    expanded = false,
    setExpanded = noop,
    history = [],
}) => (
    <Grid
        container
        className={
            classes.parentAvatarGridContainer
        }
        onClick={
            (e) => {
                if (!expanded) {
                    setExpanded(!expanded);
                }
            }
        }
    >
        <Grid
            item
            className={
                classes.avatarGridContainer
            }
        >
            <Grid container>
                <Grid item>
                    <ExpandedAvatarGrid
                        roommates={roommates}
                        expanded={expanded}
                        setExpanded={setExpanded}                    
                        onProfileClick={(uuid) => history.push(`profile/${uuid}`)}
                    />
                </Grid>
                <Grid item>
                    <CollapsedAvatarGrid
                        roommates={roommates}
                        setExpanded={setExpanded}
                    />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default compose(
    withStyles(
        styles
    ),
    expandedAction,
    withRouter,
)(
    AvatarGrid
);