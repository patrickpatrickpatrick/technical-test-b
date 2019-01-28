import React from 'react';
import {
    Avatar,
    Typography
} from '@material-ui/core';
import {
    withStyles
} from '@material-ui/core/styles';

const styles = {
   avatarExpand: {
        width: 75,
        height: 75,
        border: '1px solid white',
        textAlign: 'right',
        cursor: 'pointer',
    },
    avatar: {
        width: 60,
        height: 60,
        textAlign: 'right',
    },        
}

export default withStyles(styles)(({
    classes,
    firstName,
    cdnUrl,
    expanded,
}) => (
    <div>
        <Avatar
            className={
                expanded ? classes.avatarExpand : classes.avatar
            }
            src={
                cdnUrl
            }
            style={{
                margin: 'auto'
            }}
        /> 
        <Typography
            style={{
                color: 'white'
            }}
        >
            {
                firstName
            }
        </Typography>
    </div>
));