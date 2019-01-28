import React from 'react';
import {
    Grid,
    Typography,
} from '@material-ui/core';
import DoubleColumnText from './../../components/doubleColumnText';
import TubeStationAndDistance from './../../components/tubeStationAndDistance';

export default ({
    rentPerMonth,
    roomTitle,
    area,
    time,
    transportName,
    transportType,
    uuid,
}) => (
    <Grid
        container
        direction='column'
        spacing={8}
        style={{
            paddingTop: 10
        }}
    >
        <Grid item>
            <DoubleColumnText
                seperator
                uuid={uuid}
                columns={[
                    <Typography>
                        <strong>
                            {
                                `£${rentPerMonth}`
                            }
                        </strong>
                    </Typography>,
                    <Typography>
                        <strong>
                            {
                                roomTitle
                            }
                        </strong>
                    </Typography>
                ]}
            />
        </Grid>
        <Grid item>
            <DoubleColumnText
                seperator
                uuid={uuid}
                columns={[
                    <Typography>
                        <strong>
                            {
                                area
                            }
                        </strong>
                    </Typography>,
                    <TubeStationAndDistance
                        time={time}
                        transportName={transportName}
                        transportType={transportType}
                    />,
                ]}
            />
        </Grid>                
    </Grid>
);