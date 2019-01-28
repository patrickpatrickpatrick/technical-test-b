import React from 'react';
import {
    Grid,
    Paper,
} from '@material-ui/core';
import {
    withStyles
} from '@material-ui/core/styles';
import {
    withState
} from 'recompose';
import ResultItem from './../../components/resultItem';

const styles = {
    bigAvatar: {
        width: 60,
        height: 60,
        transition: 'margin 2s',
        textAlign: 'right',
    },
    parentGrid: {
        justifyContent: 'flex-end',
        height: '100%',
    }
};

const getFeaturedPhoto = (photos, featuredPhoto) => photos.find(photo => photo.uuid === featuredPhoto);

export const ResultGrid = withStyles(styles)(({ 
    results,
    classes,
    hover,
    setHoverPadding,
}) => (
    <Grid
        container
        direction='row'
        spacing={32}
        justify='center'
    >
        {
            results.map(({
                uuid,
                roomTitle,
                rentPerMonth,
                roommates,
                area,
                photos,
                featuredPhoto,
                transport: {
                    name: transportName,
                    type: transportType,
                    distance: {
                        time,
                        type: distanceType,
                    }
                }
            }) => (
                <Grid
                    key={uuid}
                    item
                    lg={4}
                    md={6}
                    xs={12}
                    style={{
                        maxWidth: 600
                    }}
                >
                    <Paper>
                        <Grid
                            container
                            direction='column'
                        >
                            <Grid item>
                                <ResultItem
                                    roommates={roommates}
                                    uuid={uuid}
                                    area={area}
                                    time={time}
                                    rentPerMonth={rentPerMonth}
                                    roomTitle={roomTitle}
                                    transportName={transportName}
                                    transportType={transportType}                                
                                    featuredPhoto={getFeaturedPhoto(photos, featuredPhoto)}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            ))
        }
    </Grid>
)); 

export default withState(
    'hover',
    'setHoverPadding',
    '-2px',
)(
    ResultGrid
);