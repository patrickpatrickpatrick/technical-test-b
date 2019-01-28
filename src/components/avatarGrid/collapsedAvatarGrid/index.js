import React from 'react';
import {
    Grid,
} from '@material-ui/core';
import {
    withStyles
} from '@material-ui/core/styles';
import Avatar from './../../../components/avatar';
import {
    withState,
    compose,
} from 'recompose';
import {
    noop
} from './../../../utils';

const styles = {
    parentGrid: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        padding: 10,
        cursor: 'pointer',
        display: 'inline-flex',
        width: 'auto',
    },
    avatarGrid: {
        transition: 'margin 2s',
    },
};

export const hoverAction = component => withState(
    'hoverPadding',
    'setHoverPadding',
    '0px',
)(component)  

export const CollapsedAvatarGrid = ({
    classes = {},
    setHoverPadding = noop,
    hoverPadding = noop,
    roommates = [],
}) => (
    <Grid
        container
        direction='row'
        className={classes.parentGrid}
        onMouseEnter={() => setHoverPadding('5px')}
        onMouseLeave={() => setHoverPadding('0px')}
        style={{
            position: 'absolute',
            zIndex: 0,
        }}
    >
        {
            roommates.map(({ uuid, profilePic: { cdnUrl } }) => (
                <Grid 
                    item
                    key={uuid}
                    className={classes.avatarGrid}
                    style={{
                        marginRight: hoverPadding,
                        marginLeft: hoverPadding,
                    }}
                >
                    <Avatar
                        cdnUrl={cdnUrl}
                    />                        
                </Grid>
            ))
        }                                   
    </Grid>
);

export default compose(
    hoverAction,
    withStyles(styles)
)(
    CollapsedAvatarGrid
);