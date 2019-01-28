import React from 'react';
import {
    Grid,
    Button,
} from '@material-ui/core';
import {
    withStyles
} from '@material-ui/core/styles';
import Avatar from './../../../components/avatar';
import {
    compose
} from 'recompose';

const styles = {
    gridExpand: {
        overflow: 'hidden',
        transition: 'left 0.4s',
        top: 0,
        zIndex: 9999,
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: '#171717', 
        position: 'absolute',
        height: '100%',
        padding: 10,
        width: '100% ',
    },
    collapseGridButton: {
        backgroundColor: '#ED4957',
        position: 'absolute',
        bottom: '-3px',
        padding: 0,
        fontSize: 30,
        left: '-4px',
        zIndex: 99999,
        color: '#FFFFFF',
    },        
}

export const ExpandedAvatarGrid = ({
    roommates,
    expanded,
    classes,
    setExpanded,
    onProfileClick,
}) => (
    <Grid
        container
        direction='column'
        className={classes.gridExpand}
        style={{
            left: expanded ? 0 : '100%',
        }}
    >
        <Button
            onClick={() => setExpanded(false)}
            className={classes.collapseGridButton}
        >
            {
                `<`
            }
        </Button>                    
        <Grid item>
            <Grid
                container
                justify='center'
                spacing={16}
            >
                {
                    roommates.map(({ uuid, profilePic: { cdnUrl }, firstName } ) => (
                        <Grid
                            item
                            key={uuid}
                            xs={4}
                            style={{
                                textAlign: 'center'
                            }}
                            onClick={
                                () => onProfileClick(uuid) 
                            }
                        >
                            <Avatar
                                firstName={firstName}
                                cdnUrl={cdnUrl}
                                expanded
                            />
                        </Grid>
                    ))
                }                            
            </Grid>                        
        </Grid>
    </Grid>
)

export default compose(
    withStyles(styles),
)(
    ExpandedAvatarGrid
);