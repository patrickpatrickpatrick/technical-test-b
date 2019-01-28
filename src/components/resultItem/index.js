import React from 'react';
import {
    Grid,
} from '@material-ui/core';
import {
    withStyles
} from '@material-ui/core';
import {
    withRouter
} from 'react-router-dom';
import AvatarGrid from './../../components/avatarGrid';
import RoomAttributes from './../../components/roomAttributes';
import {
    compose
} from 'recompose';

const styles = {
    parentContainer: {
        padding: 15,
    },
    container: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 10,
    },
    roomImageItem: {
        cursor: 'pointer',
        backgroundSize: 'cover',
        minHeight: 300,
        position: 'relative',
        overflow: 'hidden',
    }
}

const ResultItem = ({
    history,
    roommates,
    classes,
    uuid,
    area,
    time,
    rentPerMonth,
    roomTitle,
    transportName,
    transportType,    
    featuredPhoto: {
        cdnUrl
    }
}) => (
    <Grid
        container
        direction='column'
        className={classes.parentContainer}
    >
        <Grid 
            item
        >
            <Grid
                container
                direction='column'
                className={classes.container}
            >
                <Grid
                    onClick={
                        () => history.push(`listings/${uuid}`)
                    }                
                    item
                    className={classes.roomImageItem}
                    style={{
                        backgroundImage: `url(${
                            cdnUrl
                        })`
                    }}
                />
                <Grid item>
                    <AvatarGrid
                        roommates={roommates}
                    />
                </Grid>
            </Grid>
        </Grid>        
        <Grid
            item
        >
            <RoomAttributes
                area={area}
                time={time}
                rentPerMonth={rentPerMonth}
                roomTitle={roomTitle}
                transportName={transportName}
                transportType={transportType}
                uuid={uuid}
            />
        </Grid>
    </Grid>
) 

export default compose(
    withRouter,
    withStyles(styles),
)(
    ResultItem
);
