import React from 'react';
import IconText from './../../components/iconText';
import {
    OvergroundIcon,
    UndergroundIcon,
    WalkingIcon,    
} from './../../components/icons';
import DoubleColumnText from './../../components/doubleColumnText';

const transportTypeIcons = {
    overground: OvergroundIcon,
    underground: UndergroundIcon,
}

const transportNameTransform = name => name.split(' ').slice(0, -2).join(' ')

export default ({
    transportType,
    transportName,
    time,
    uuid,
}) => (
    <DoubleColumnText
        uuid={uuid}
        columns={[
            <IconText
                text={time}
                icon={WalkingIcon}
            />,
            <IconText
                text={transportNameTransform(transportName)}
                icon={transportTypeIcons[transportType]}
            />
        ]}
    />
)